
        // Fetch data from a CSV file
        async function fetchCSVData() {
            try {
                const response = await fetch('data.csv'); // Ensure the CSV file is in the same directory
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const csvText = await response.text();

                // Parse CSV data
                const rows = csvText.split('\n').map(row => row.split(';'));

                // Extract labels (header row) and data (subsequent rows)
                const labels = rows.slice(1).map(row => row[0]); // Use the first column (e.g., "TIME") as labels
                const values = rows.slice(1).map(row => parseFloat(row[1])); // Use the second column for values (e.g., "R Ph Voltage")

                return { labels, values };
            } catch (error) {
                console.error('Error fetching the CSV data:', error);
                return null;
            }
        }

        // Render the chart
        async function renderChart() {
            const data = await fetchCSVData();

            if (data) {
                const ctx = document.getElementById('myChart').getContext('2d');
                new Chart(ctx, {
                    type: 'line', // Change to 'bar', 'pie', etc., for other chart types
                    data: {
                        labels: data.labels, // Labels for the X-axis
                        datasets: [
                            {
                                label: 'R Ph Voltage', // Change this to the appropriate column name
                                data: data.values, // Values for the Y-axis
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                borderColor: 'rgba(75, 192, 192, 1)',
                                borderWidth: 1,
                                tension: 0.4, // Smooth curves for the line
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: 'CSV Data Visualization'
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });
            }
        }

        renderChart();