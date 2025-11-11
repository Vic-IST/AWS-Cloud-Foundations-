window.quizBanks = window.quizBanks || {};
window.quizBanks.mod03 = 
[
  {
    "q": "Which AWS service provides resizable compute capacity in the cloud and allows users to launch virtual servers on demand?",
    "choices": [
      "Amazon EC2",
      "AWS Lambda",
      "AWS Elastic Beanstalk",
      "Amazon ECS"
    ],
    "answer": 0,
    "explain": "Amazon Elastic Compute Cloud (EC2) provides resizable compute capacity using virtual machines called instances that can be scaled as needed.",
    "why_others_are_not_correct": {
      "1": "Lambda runs code without managing servers, not virtual machines.",
      "2": "Elastic Beanstalk automates application deployment using EC2 but is not the compute service itself.",
      "3": "ECS is a container orchestration service, not general-purpose compute."
    }
  },
  {
    "q": "Which AWS service allows you to run code without provisioning or managing servers?",
    "choices": [
      "Amazon EC2",
      "AWS Lambda",
      "Amazon Lightsail",
      "Amazon S3"
    ],
    "answer": 1,
    "explain": "AWS Lambda is a serverless compute service that executes code in response to events, automatically managing compute resources.",
    "why_others_are_not_correct": {
      "0": "EC2 requires you to manage virtual machines.",
      "2": "Lightsail provides virtual servers for simple web apps, not serverless functions.",
      "3": "S3 is a storage service, not a compute service."
    }
  },
  {
    "q": "A development team wants to deploy web applications quickly without worrying about the underlying infrastructure. Which AWS service should they use?",
    "choices": [
      "AWS Elastic Beanstalk",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS"
    ],
    "answer": 0,
    "explain": "AWS Elastic Beanstalk automates application deployment, capacity provisioning, load balancing, and monitoring - ideal for developers who want to focus on code, not infrastructure.",
    "why_others_are_not_correct": {
      "1": "EC2 provides compute power but requires manual setup and scaling.",
      "2": "Lambda runs code snippets, not full web apps requiring web servers.",
      "3": "RDS is a managed database service, not a web app host."
    }
  },
  {
    "q": "Which AWS service is used for object storage and can host static websites?",
    "choices": [
      "Amazon EBS",
      "Amazon S3",
      "Amazon EFS",
      "Amazon Glacier"
    ],
    "answer": 1,
    "explain": "Amazon Simple Storage Service (S3) stores data as objects and can serve static website content directly over HTTP or HTTPS.",
    "why_others_are_not_correct": {
      "0": "EBS provides block storage for EC2 instances, not website hosting.",
      "2": "EFS offers shared file storage for Linux instances, not object storage.",
      "3": "Glacier is for long-term archival, not web hosting."
    }
  },
  {
    "q": "A company needs a relational database that handles backups, patching, and scaling automatically. Which AWS service meets this requirement?",
    "choices": [
      "Amazon EC2",
      "Amazon RDS",
      "Amazon DynamoDB",
      "AWS Database Migration Service"
    ],
    "answer": 1,
    "explain": "Amazon Relational Database Service (RDS) is a managed service that automates database administration tasks such as backups and maintenance.",
    "why_others_are_not_correct": {
      "0": "EC2 would require manual installation and management of databases.",
      "2": "DynamoDB is a NoSQL database, not a relational one.",
      "3": "Database Migration Service is for migrating databases, not hosting them."
    }
  },
  {
    "q": "A startup wants to build a microservices application using containers. Which AWS service should they use to run and manage containers?",
    "choices": [
      "Amazon ECS",
      "AWS CloudFormation",
      "Amazon S3",
      "AWS CodeBuild"
    ],
    "answer": 0,
    "explain": "Amazon Elastic Container Service (ECS) is a fully managed container orchestration service that runs and scales containerized applications.",
    "why_others_are_not_correct": {
      "1": "CloudFormation automates infrastructure deployment but doesn’t run containers.",
      "2": "S3 is used for storage, not running containers.",
      "3": "CodeBuild compiles and tests code but doesn’t host containers."
    }
  },
  {
    "q": "A developer wants to use a managed Kubernetes service to orchestrate containers on AWS. Which service provides this capability?",
    "choices": [
      "Amazon ECS",
      "Amazon EKS",
      "AWS Elastic Beanstalk",
      "AWS Fargate"
    ],
    "answer": 1,
    "explain": "Amazon Elastic Kubernetes Service (EKS) is a fully managed Kubernetes service that runs and scales containerized applications using open-source Kubernetes.",
    "why_others_are_not_correct": {
      "0": "ECS is AWS’s native container service, not Kubernetes-based.",
      "2": "Elastic Beanstalk deploys apps but doesn’t orchestrate containers.",
      "3": "Fargate provides compute for containers but is not a Kubernetes service itself."
    }
  },
  {
    "q": "A web application must automatically distribute incoming traffic across multiple instances in different Availability Zones. Which AWS service provides this functionality?",
    "choices": [
      "AWS Auto Scaling",
      "Amazon Route 53",
      "Elastic Load Balancing",
      "Amazon CloudFront"
    ],
    "answer": 2,
    "explain": "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets to ensure high availability.",
    "why_others_are_not_correct": {
      "0": "Auto Scaling adjusts instance counts, not traffic distribution.",
      "1": "Route 53 manages DNS routing but doesn’t balance load across instances.",
      "3": "CloudFront caches and delivers content, not balance backend traffic."
    }
  },
  {
    "q": "Which AWS service allows you to establish a private, dedicated network connection between your on-premises data center and AWS?",
    "choices": [
      "AWS VPN",
      "Amazon VPC",
      "AWS Direct Connect",
      "AWS Transit Gateway"
    ],
    "answer": 2,
    "explain": "AWS Direct Connect provides a dedicated, low-latency network connection from your data center to AWS, improving consistency and security.",
    "why_others_are_not_correct": {
      "0": "VPN creates an encrypted tunnel but not a dedicated line.",
      "1": "VPC defines a virtual network in AWS, not a physical connection.",
      "3": "Transit Gateway connects VPCs and on-premises networks but depends on existing connections like VPN or Direct Connect."
    }
  },
  {
    "q": "A company needs to reduce network latency for users worldwide when accessing its web content. Which AWS service should it use?",
    "choices": [
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Amazon CloudFront",
      "AWS Transit Gateway"
    ],
    "answer": 2,
    "explain": "Amazon CloudFront is a Content Delivery Network (CDN) that caches and delivers content from edge locations closer to users, reducing latency.",
    "why_others_are_not_correct": {
      "0": "Route 53 manages DNS routing, not content caching.",
      "1": "Global Accelerator optimizes network paths for applications but doesn’t cache content.",
      "3": "Transit Gateway connects networks but doesn’t deliver web content."
    }
  },
  {
    "q": "Which AWS service is designed to store infrequently accessed data at a lower cost while maintaining retrieval options when needed?",
    "choices": [
      "Amazon S3 Glacier",
      "Amazon EBS",
      "Amazon RDS",
      "AWS Backup"
    ],
    "answer": 0,
    "explain": "Amazon S3 Glacier provides low-cost, secure, and durable storage for long-term archival data with configurable retrieval times.",
    "why_others_are_not_correct": {
      "1": "EBS provides block storage for EC2 instances and is not optimized for archival use.",
      "2": "RDS is a managed relational database service, not long-term storage.",
      "3": "AWS Backup automates backups but doesn’t provide storage classes for archives."
    }
  },
  {
    "q": "A company needs to share files across multiple EC2 instances that run Linux. Which AWS storage service is best suited for this requirement?",
    "choices": [
      "Amazon S3",
      "Amazon Elastic File System (EFS)",
      "Amazon EBS",
      "Amazon Glacier"
    ],
    "answer": 1,
    "explain": "Amazon EFS provides scalable, shared file storage for Linux instances accessible concurrently from multiple EC2 instances.",
    "why_others_are_not_correct": {
      "0": "S3 is object storage, not shared file storage.",
      "2": "EBS volumes can only attach to one EC2 instance at a time.",
      "3": "Glacier is for archival storage, not live file sharing."
    }
  },
  {
    "q": "An application requires a NoSQL database that can handle millions of requests per second with single-digit millisecond latency. Which AWS service fits this need?",
    "choices": [
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift",
      "Amazon Aurora"
    ],
    "answer": 1,
    "explain": "Amazon DynamoDB is a fully managed NoSQL database designed for high performance and scalability with low-latency responses.",
    "why_others_are_not_correct": {
      "0": "RDS supports relational databases, not NoSQL workloads.",
      "2": "Redshift is for data warehousing and analytics, not millisecond latency.",
      "3": "Aurora is relational and optimized for transactional workloads, not NoSQL."
    }
  },
  {
    "q": "Which AWS service provides data warehousing capabilities for large-scale analytical workloads?",
    "choices": [
      "Amazon RDS",
      "Amazon Redshift",
      "Amazon S3",
      "AWS Glue"
    ],
    "answer": 1,
    "explain": "Amazon Redshift is a fully managed, petabyte-scale data warehouse optimized for online analytical processing (OLAP).",
    "why_others_are_not_correct": {
      "0": "RDS is for relational databases, not large-scale analytics.",
      "2": "S3 stores objects but doesn’t perform queries natively.",
      "3": "Glue is an ETL (Extract, Transform, Load) service, not a data warehouse."
    }
  },
  {
    "q": "A developer wants to automate the provisioning of AWS resources using templates. Which service provides infrastructure as code (IaC)?",
    "choices": [
      "AWS CloudFormation",
      "AWS Elastic Beanstalk",
      "AWS CodePipeline",
      "AWS CloudTrail"
    ],
    "answer": 0,
    "explain": "AWS CloudFormation enables infrastructure as code (IaC), allowing you to define and deploy AWS resources using JSON or YAML templates.",
    "why_others_are_not_correct": {
      "1": "Elastic Beanstalk deploys applications, not full infrastructure templates.",
      "2": "CodePipeline automates CI/CD workflows, not infrastructure creation.",
      "3": "CloudTrail logs API activity, not infrastructure deployment."
    }
  },
  {
    "q": "Which AWS service helps developers visually design and build applications by connecting AWS services using a workflow?",
    "choices": [
      "AWS Step Functions",
      "AWS CloudFormation",
      "AWS CodeBuild",
      "AWS Systems Manager"
    ],
    "answer": 0,
    "explain": "AWS Step Functions lets you coordinate multiple AWS services into serverless workflows, simplifying application orchestration and automation.",
    "why_others_are_not_correct": {
      "1": "CloudFormation defines infrastructure, not workflows.",
      "2": "CodeBuild compiles and tests code, not orchestrates processes.",
      "3": "Systems Manager manages systems and automation tasks, not workflows."
    }
  },
  {
    "q": "A retail company wants to improve their website’s performance by caching content close to users globally. Which AWS service provides this?",
    "choices": [
      "Amazon CloudFront",
      "Amazon Route 53",
      "AWS Global Accelerator",
      "Amazon CloudWatch"
    ],
    "answer": 0,
    "explain": "Amazon CloudFront is a Content Delivery Network (CDN) that caches content at AWS edge locations, reducing latency for users worldwide.",
    "why_others_are_not_correct": {
      "1": "Route 53 handles DNS queries but not content caching.",
      "2": "Global Accelerator optimizes routes but doesn’t cache data.",
      "3": "CloudWatch monitors performance, not content delivery."
    }
  },
  {
    "q": "Which AWS database service offers full compatibility with MySQL and PostgreSQL while being managed and automatically scalable?",
    "choices": [
      "Amazon Aurora",
      "Amazon RDS",
      "Amazon DynamoDB",
      "Amazon Redshift"
    ],
    "answer": 0,
    "explain": "Amazon Aurora is a managed relational database engine compatible with MySQL and PostgreSQL, providing high performance and automatic scaling.",
    "why_others_are_not_correct": {
      "1": "RDS supports multiple databases but not Aurora’s enhanced performance and scaling.",
      "2": "DynamoDB is NoSQL, not relational.",
      "3": "Redshift is for analytics, not transactional workloads."
    }
  },
  {
    "q": "A developer wants to store configuration secrets such as API keys and database passwords securely. Which AWS service should they use?",
    "choices": [
      "AWS Secrets Manager",
      "AWS Config",
      "AWS CloudTrail",
      "AWS IAM"
    ],
    "answer": 0,
    "explain": "AWS Secrets Manager securely stores, rotates, and manages sensitive application credentials such as API keys and passwords.",
    "why_others_are_not_correct": {
      "1": "AWS Config tracks configuration changes, not secrets.",
      "2": "CloudTrail records API activity, not credentials.",
      "3": "IAM manages identities and permissions, not secret storage."
    }
  },
  {
    "q": "A business wants to deploy applications closer to mobile users for low-latency performance using AWS infrastructure. Which option should they choose?",
    "choices": [
      "AWS Local Zones",
      "Amazon EC2 Auto Scaling",
      "AWS Elastic Beanstalk",
      "Amazon Route 53"
    ],
    "answer": 0,
    "explain": "AWS Local Zones place compute, storage, and database services close to large population centers, reducing latency for end users.",
    "why_others_are_not_correct": {
      "1": "Auto Scaling adjusts compute capacity but doesn’t impact geographical latency.",
      "2": "Elastic Beanstalk automates deployment but doesn’t change location of resources.",
      "3": "Route 53 handles DNS routing but doesn’t host infrastructure near users."
    }
  },
  {
    "q": "Which of the following is a best practice when designing a highly-available web application on AWS across multiple Availability Zones?",
    "choices": [
      "Place all your EC2 instances in a single Availability Zone and rely on hardware redundancy.",
      "Use an Elastic Load Balancer (ELB), distribute instances across at least two Availability Zones, and use Auto Scaling to replace unhealthy instances.",
      "Ignore Auto Scaling and manually adjust server count during load spikes.",
      "Use a single database instance in one zone without failover."
    ],
    "answer": 1,
    "explain": "Best practice for high availability: distribute across zones, use ELB to distribute traffic, and use Auto Scaling to handle failures or load changes.",
    "why_others_are_not_correct": {
      "0": "Putting all instances in one AZ creates a single point of failure.",
      "2": "Manual adjustment is error-prone and slower than Auto Scaling.",
      "3": "A single database instance with no failover risks downtime."
    }
  },
  {
    "q": "Scenario: A startup’s microservice runs on containers and needs to scale quickly, maintain security, and minimize overhead. Which AWS approach aligns best with technology best practices?",
    "choices": [
      "Run containers on EC2 instances you manually manage, patch, and scale.",
      "Use a managed container service (like ECS or EKS) with auto-scaling, minimal server management, and leverage IAM roles for containers.",
      "Use EC2 Reserved Instances for containers and manually orchestrate scaling.",
      "Run containers on on-premises servers and integrate with AWS storage."
    ],
    "answer": 1,
    "explain": "A best practice is to use a managed container service so you focus on application logic, not infrastructure, and ensure scalable, secure operations with minimal overhead.",
    "why_others_are_not_correct": {
      "0": "Manual management of EC2 for containers adds operational burden.",
      "2": "Reserved Instances might reduce cost but you still handle orchestration manually.",
      "3": "On-premises integration loses many cloud agility benefits."
    }
  },
  {
    "q": "Which AWS service is best practice for defining infrastructure as code (IaC) so you can deploy a repeatable, versioned architecture?",
    "choices": [
      "AWS CloudFormation",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon S3"
    ],
    "answer": 0,
    "explain": "AWS CloudFormation allows you to define your architecture as code (JSON or YAML), enabling repeatable, versioned, audited infrastructure deployments - a technology best practice.",
    "why_others_are_not_correct": {
      "1": "EC2 is a compute service, not an IaC tool.",
      "2": "Lambda runs code, not manage infrastructure definitions.",
      "3": "S3 stores objects, not infrastructure."
    }
  },
  {
    "q": "Scenario: An enterprise has global users and is concerned about latency and data consistency when accessing a database. What architecture best-practice should they follow in AWS?",
    "choices": [
      "Deploy a single database in one Region and serve all users from it globally.",
      "Use a global database solution (e.g., DynamoDB global tables or Aurora global database) or replicate data across Regions and use edge caching for reads.",
      "Use multiple independent databases with no replication and accept data divergence.",
      "Use a local on-premises database at each location and manually sync nightly."
    ],
    "answer": 1,
    "explain": "Best practice for global applications: use AWS services designed for global scale (global tables or multi-region replication) and edge caching to reduce latency and maintain performance and consistency.",
    "why_others_are_not_correct": {
      "0": "Single Region can lead to high latency and single point of failure.",
      "2": "No replication invites inconsistency and user experience issues.",
      "3": "Manual nightly sync risks high latency and data staleness."
    }
  },
  {
    "q": "Which best practice should you follow for data storage tiering in AWS so you optimize cost and performance?",
    "choices": [
      "Keep all data in the highest performance storage (e.g., EBS io2) regardless of access pattern.",
      "Use the most economical storage tier for infrequently accessed data (e.g., S3 Standard-IA, S3 Glacier) and performance-optimized tiers for hot data.",
      "Only use on-premises storage for archives to avoid cloud costs.",
      "Store all data in S3 Glacier and retrieve it on demand for all workloads."
    ],
    "answer": 1,
    "explain": "Best practice: align storage tiers to access patterns - hot data on high-performance tiers, cold/archive data on cost-optimized tiers like S3 Standard-IA or Glacier - improving cost-performance balance.",
    "why_others_are_not_correct": {
      "0": "Using high-performance storage for all data wastes cost.",
      "2": "On-premises archives lose cloud benefits and centralization.",
      "3": "Storing everything in Glacier incurs high retrieval latency and cost for active workloads."
    }
  }
];

