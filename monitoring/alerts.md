# Alert Configuration – Internee.pk System

## Overview
Alerts are configured to notify administrators when system performance or reliability degrades.

## Configured Alerts

### 1. High CPU Usage Alert
- **Metric:** CPU Percentage
- **Condition:** Greater than 80%
- **Duration:** 5 minutes
- **Action:** Email notification

### 2. Failed Requests Alert
- **Metric:** Failed Requests
- **Condition:** More than 2 failures in 5 minutes
- **Action:** Email notification

### 3. Application Availability Alert
- **Metric:** Availability
- **Condition:** Less than 99%
- **Action:** Email notification

## Purpose of Alerts
- Detect system failures early
- Reduce downtime
- Enable proactive issue resolution

## Tools Used
- Azure Monitor Alerts
- Action Groups
