# Cloud Assistant AI

A serverless conversational AI web application built with **AWS Amplify**, **Amazon Lex**, **AWS Lambda**, and **React**. This assistant allows users to interact with AWS services using natural language — enabling actions like listing EC2 instances, describing S3 buckets, and more — all through a chatbot interface.

---

## 🔧 Tech Stack

| Layer     | Tech                        |
| --------- | --------------------------- |
| Frontend  | React.js + AWS Amplify      |
| Backend   | Node.js Lambda functions    |
| Auth      | Amazon Cognito              |
| AI Bot    | Amazon Lex                  |
| API Layer | AWS AppSync (GraphQL)       |
| Database  | Amazon DynamoDB             |
| Hosting   | AWS Amplify Hosting (CI/CD) |

---

## 📐 Architecture Overview

- **Frontend (React)** connects to **Amazon Lex** for conversational interaction.
- **Lex** triggers **AWS Lambda functions** to execute AWS service operations.
- Data (e.g., user preferences, logs) is managed via **AppSync GraphQL API** and **DynamoDB**.
- **Authentication** is handled by **Amazon Cognito**.
- Hosted via **AWS Amplify**, with full CI/CD from GitHub.

![Architecture Diagram](./docs/architecture.png) _(placeholder - replace with actual diagram)_

---

## 🚀 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-org/cloud-assistant-ai.git
cd cloud-assistant-ai
```
