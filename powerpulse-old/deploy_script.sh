#!/bin/bash
sudo dnf update -y
sudo dnf install -y unzip
curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo dnf install -y nodejs
unzip -q powerpulse-deploy.zip -d powerpulse
unzip -q certs-deploy.zip -d certs
cd powerpulse
sed -i 's|AWS_IOT_CERT_PATH=.*|AWS_IOT_CERT_PATH="/home/ec2-user/certs/AWS_TRB245_CERT/61f2faf07893418ba9e020d2b92525708e76f22b14720a7e6349474f29eed282-certificate.pem.crt"|' .env
sed -i 's|AWS_IOT_PRIVATE_KEY_PATH=.*|AWS_IOT_PRIVATE_KEY_PATH="/home/ec2-user/certs/AWS_TRB245_CERT/61f2faf07893418ba9e020d2b92525708e76f22b14720a7e6349474f29eed282-private.pem.key"|' .env
sed -i 's|AWS_IOT_CA_PATH=.*|AWS_IOT_CA_PATH="/home/ec2-user/certs/AWS_TRB245_CERT/AmazonRootCA1 (3).pem"|' .env
npm install
sudo npm install -g pm2
pm2 start server.js --name powerpulse
pm2 save
