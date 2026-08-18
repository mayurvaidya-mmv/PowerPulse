#!/bin/bash
set -e

rm -rf /home/ec2-user/powerpulse
mkdir -p /home/ec2-user/powerpulse
unzip -qo /home/ec2-user/powerpulse-deploy.zip -d /home/ec2-user/powerpulse

cd /home/ec2-user/powerpulse

if ! command -v node &> /dev/null; then
    curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
    sudo dnf install -y nodejs
fi

if ! command -v pm2 &> /dev/null; then
    sudo npm install -g pm2
fi

npm install

pm2 stop powerpulse || true
pm2 delete powerpulse || true
pm2 start server.js --name powerpulse
pm2 save
echo 'Deployment Successful!'
