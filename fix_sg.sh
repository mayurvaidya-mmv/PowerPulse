#!/bin/bash
export AWS_ACCESS_KEY_ID=AKIAYEKP5YXJFZHZN757
export AWS_SECRET_ACCESS_KEY=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
export AWS_DEFAULT_REGION=ap-south-1

echo "Adding port 8082 to sg-03a063fb7a30d5bcc..."
aws ec2 authorize-security-group-ingress \
    --group-id sg-03a063fb7a30d5bcc \
    --protocol tcp \
    --port 8082 \
    --cidr 0.0.0.0/0 2>&1

echo "---"
echo "Adding port 8082 to sg-002694305a1da0d15..."
aws ec2 authorize-security-group-ingress \
    --group-id sg-002694305a1da0d15 \
    --protocol tcp \
    --port 8082 \
    --cidr 0.0.0.0/0 2>&1
