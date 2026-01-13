# Monitoring Metrics – Internee.pk System

## Overview
This document describes the key performance metrics monitored for the Internee.pk backend using Azure Monitor.

## Monitored Metrics

### 1. CPU Usage
Measures the percentage of CPU consumed by the backend.
Detects high load and performance bottlenecks.
- **Threshold Used:** > 80%

### 2. Request Count
Total number of incoming HTTP requests.
Tracks application usage and traffic patterns.

### 3. Response Time
Average time taken to process requests.
Identifies slow APIs and performance issues.

### 4. Failed Requests
Number of requests resulting in error responses (4xx/5xx).
Helps detect application failures and bugs.

## Tools Used
Azure Monitor
Application Insights

## Outcome
These metrics provide real-time visibility into application health and performance.
