window.quizBanks = window.quizBanks || {};
window.quizBanks.practice = 
  [
  {
    "q": "Which of the following statements best describes the AWS Shared Responsibility Model?",
    "choices": [
      "AWS is responsible for securing everything in the customer’s environment.",
      "The customer is responsible for the physical security of AWS data centers.",
      "AWS secures the cloud infrastructure, while customers secure what they put in the cloud.",
      "Customers have no security responsibilities in AWS."
    ],
    "answer": 2,
    "explain": "Under the Shared Responsibility Model, AWS manages security *of* the cloud (infrastructure, hardware, software), while customers manage security *in* the cloud (data, configurations, IAM).",
    "why_others_are_not_correct": {
      "0": "AWS doesn’t manage customer data or application security.",
      "1": "AWS handles physical security of data centers, not customers.",
      "3": "Customers must secure their workloads and data-security is shared."
    }
  },
  {
    "q": "A company wants to restrict access to AWS resources so that users can perform only tasks they need to do their jobs. Which principle should they apply?",
    "choices": [
      "Root-level permissions",
      "Principle of least privilege",
      "Multi-factor authentication",
      "Elastic scaling"
    ],
    "answer": 1,
    "explain": "The principle of least privilege means granting users the minimal set of permissions required to complete their tasks, reducing security risks.",
    "why_others_are_not_correct": {
      "0": "Root access should be avoided for daily tasks.",
      "2": "MFA enhances authentication, not authorization limits.",
      "3": "Elastic scaling relates to resources, not permissions."
    }
  },
  {
    "q": "Which AWS service helps manage user identities, groups, and permissions across AWS accounts?",
    "choices": [
      "AWS Config",
      "AWS Identity and Access Management (IAM)",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    "answer": 1,
    "explain": "AWS IAM allows administrators to manage users, groups, and permissions to securely control access to AWS resources.",
    "why_others_are_not_correct": {
      "0": "AWS Config tracks resource configurations, not access control.",
      "2": "Amazon Inspector checks for vulnerabilities, not permissions.",
      "3": "CloudTrail logs API activity but doesn’t manage identities."
    }
  },
  {
    "q": "A company stores sensitive data in Amazon S3. What can they enable to automatically encrypt this data at rest?",
    "choices": [
      "S3 Versioning",
      "S3 Object Lock",
      "Server-Side Encryption",
      "Cross-Region Replication"
    ],
    "answer": 2,
    "explain": "Server-Side Encryption (SSE) automatically encrypts data as it’s written to S3 and decrypts it when accessed by authorized users.",
    "why_others_are_not_correct": {
      "0": "Versioning stores multiple object versions but doesn’t encrypt data.",
      "1": "Object Lock prevents deletion, not encryption.",
      "3": "Replication copies objects between Regions, not encrypts them."
    }
  },
  {
    "q": "Which service provides centralized access to AWS compliance reports and audit documentation?",
    "choices": [
      "AWS Artifact",
      "AWS Security Hub",
      "AWS Shield",
      "AWS Inspector"
    ],
    "answer": 0,
    "explain": "AWS Artifact gives customers self-service access to AWS compliance reports and security documentation.",
    "why_others_are_not_correct": {
      "1": "Security Hub aggregates security findings but not compliance reports.",
      "2": "AWS Shield provides DDoS protection, not documentation.",
      "3": "Inspector scans for vulnerabilities, not compliance evidence."
    }
  },
  {
    "q": "A new AWS account is created for a small business. What should the owner do immediately to secure the root user account?",
    "choices": [
      "Delete the root account after setup",
      "Enable multi-factor authentication (MFA)",
      "Grant root access to all administrators",
      "Use the root account for daily operations"
    ],
    "answer": 1,
    "explain": "Enabling MFA on the root account adds an extra layer of security, preventing unauthorized access even if the password is compromised.",
    "why_others_are_not_correct": {
      "0": "The root account cannot be deleted.",
      "2": "Root access should never be shared.",
      "3": "Root should be reserved for limited administrative tasks only."
    }
  },
  {
    "q": "A company wants to track all API calls made within their AWS account for auditing and investigation purposes. Which service should they use?",
    "choices": [
      "AWS CloudTrail",
      "Amazon CloudWatch",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    "answer": 0,
    "explain": "AWS CloudTrail records API calls across AWS services, including who made them, when, and from where-supporting auditing and compliance.",
    "why_others_are_not_correct": {
      "1": "CloudWatch monitors performance metrics, not API calls.",
      "2": "Config tracks configuration changes, not API activity.",
      "3": "Trusted Advisor provides optimization recommendations, not logs."
    }
  },
  {
    "q": "An online retailer needs protection against Distributed Denial of Service (DDoS) attacks. Which AWS service provides this protection?",
    "choices": [
      "AWS WAF",
      "AWS Shield",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    "answer": 1,
    "explain": "AWS Shield provides managed DDoS protection at both the network and application layers.",
    "why_others_are_not_correct": {
      "0": "AWS WAF filters web traffic based on custom rules but doesn’t provide full DDoS mitigation alone.",
      "2": "Security Hub aggregates findings but doesn’t actively block attacks.",
      "3": "GuardDuty detects suspicious behavior, not mitigate DDoS attacks."
    }
  },
  {
    "q": "Which service helps continuously detect malicious activity and unauthorized behavior within AWS accounts using machine learning?",
    "choices": [
      "AWS GuardDuty",
      "AWS Trusted Advisor",
      "AWS CloudHSM",
      "AWS Firewall Manager"
    ],
    "answer": 0,
    "explain": "Amazon GuardDuty uses machine learning and threat intelligence to detect suspicious activity like unauthorized API calls or compromised instances.",
    "why_others_are_not_correct": {
      "1": "Trusted Advisor focuses on best practice checks, not real-time threat detection.",
      "2": "CloudHSM provides hardware security modules for key storage.",
      "3": "Firewall Manager manages firewall policies but doesn’t detect activity."
    }
  },
  {
    "q": "A financial company must meet strict compliance standards and needs visibility into its security posture across multiple AWS accounts. Which service provides this centralized view?",
    "choices": [
      "AWS Artifact",
      "AWS Security Hub",
      "Amazon CloudWatch",
      "AWS Systems Manager"
    ],
    "answer": 1,
    "explain": "AWS Security Hub aggregates and prioritizes security findings from multiple AWS services and accounts, providing a single compliance dashboard.",
    "why_others_are_not_correct": {
      "0": "AWS Artifact provides compliance documentation, not active monitoring.",
      "2": "CloudWatch monitors metrics and logs, not compliance findings.",
      "3": "Systems Manager manages instances and configurations, not compliance dashboards."
    }
  },
  {
    "q": "A company is developing an application that stores sensitive medical data. Which AWS service should they use to manage encryption keys securely?",
    "choices": [
      "AWS Key Management Service (AWS KMS)",
      "AWS Certificate Manager",
      "AWS Artifact",
      "AWS CloudFormation"
    ],
    "answer": 0,
    "explain": "AWS Key Management Service (KMS) lets customers create, manage, and control cryptographic keys used to encrypt data securely across AWS services.",
    "why_others_are_not_correct": {
      "1": "Certificate Manager issues SSL/TLS certificates, not encryption keys.",
      "2": "Artifact provides compliance documentation, not key management.",
      "3": "CloudFormation automates infrastructure but doesn’t handle encryption keys."
    }
  },
  {
    "q": "Which AWS service helps customers protect web applications by filtering and blocking malicious web traffic based on customizable rules?",
    "choices": [
      "AWS WAF",
      "AWS Shield Advanced",
      "AWS Config",
      "Amazon Macie"
    ],
    "answer": 0,
    "explain": "AWS Web Application Firewall (WAF) lets customers define rules to block SQL injection, cross-site scripting, and other malicious traffic at the application layer.",
    "why_others_are_not_correct": {
      "1": "Shield Advanced provides DDoS protection but not custom web filtering.",
      "2": "Config tracks resource configurations, not web traffic.",
      "3": "Macie detects sensitive data exposure in S3, not web attacks."
    }
  },
  {
    "q": "An enterprise uses multiple AWS accounts. Which service allows centralized management of security policies across all accounts?",
    "choices": [
      "AWS Security Hub",
      "AWS Organizations",
      "AWS CloudTrail",
      "Amazon Inspector"
    ],
    "answer": 1,
    "explain": "AWS Organizations enables central governance and management of multiple AWS accounts, including applying service control policies (SCPs) for security.",
    "why_others_are_not_correct": {
      "0": "Security Hub consolidates findings but doesn’t enforce account policies.",
      "2": "CloudTrail tracks API activity, not account policy management.",
      "3": "Inspector scans for vulnerabilities but doesn’t manage accounts."
    }
  },
  {
    "q": "A developer needs to grant a Lambda function temporary access to an S3 bucket. What is the most secure way to do this?",
    "choices": [
      "Embed the AWS access keys in the function code",
      "Use an IAM role assigned to the Lambda function",
      "Use the root user’s credentials",
      "Share static credentials via email"
    ],
    "answer": 1,
    "explain": "The best practice is to use an IAM role attached to the Lambda function, which provides temporary credentials automatically managed by AWS.",
    "why_others_are_not_correct": {
      "0": "Embedding access keys in code is insecure and not recommended.",
      "2": "Root credentials should never be used for resource access.",
      "3": "Sharing credentials by email is unsafe and violates security policies."
    }
  },
  {
    "q": "Which AWS service automatically discovers and classifies sensitive data stored in Amazon S3 buckets?",
    "choices": [
      "AWS Config",
      "Amazon Macie",
      "AWS Shield",
      "AWS CloudTrail"
    ],
    "answer": 1,
    "explain": "Amazon Macie uses machine learning to identify and protect sensitive data such as personally identifiable information (PII) in S3.",
    "why_others_are_not_correct": {
      "0": "AWS Config tracks configuration compliance, not data classification.",
      "2": "Shield provides DDoS protection, not data discovery.",
      "3": "CloudTrail logs API calls, not data content analysis."
    }
  },
  {
    "q": "A company must ensure that all data transmitted between its on-premises environment and AWS is encrypted. Which service provides this secure connection?",
    "choices": [
      "AWS Direct Connect",
      "AWS VPN",
      "Amazon CloudFront",
      "AWS Snowball"
    ],
    "answer": 1,
    "explain": "AWS VPN provides an encrypted tunnel between on-premises networks and AWS, ensuring data in transit is secure.",
    "why_others_are_not_correct": {
      "0": "Direct Connect provides a dedicated line but is not encrypted by default.",
      "2": "CloudFront distributes content securely but isn’t a network connection.",
      "3": "Snowball transfers data physically, not over the network."
    }
  },
  {
    "q": "Which service allows an organization to automatically assess its AWS accounts for security best practices and compliance gaps?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Security Hub",
      "AWS Audit Manager",
      "AWS GuardDuty"
    ],
    "answer": 1,
    "explain": "AWS Security Hub consolidates findings from multiple services and automatically checks your environment against AWS security standards.",
    "why_others_are_not_correct": {
      "0": "Trusted Advisor provides general optimization checks but not compliance audits.",
      "2": "Audit Manager helps with compliance documentation but not automated findings.",
      "3": "GuardDuty focuses on threat detection, not compliance checks."
    }
  },
  {
    "q": "A company wants to ensure that AWS resources remain compliant with internal configurations. Which service can automatically detect when resources drift from their approved configuration?",
    "choices": [
      "AWS Config",
      "AWS CloudTrail",
      "Amazon Inspector",
      "AWS IAM"
    ],
    "answer": 0,
    "explain": "AWS Config continuously monitors and records AWS resource configurations and alerts when changes deviate from approved baselines.",
    "why_others_are_not_correct": {
      "1": "CloudTrail records API calls but doesn’t evaluate compliance.",
      "2": "Inspector identifies vulnerabilities, not configuration drift.",
      "3": "IAM manages access but doesn’t track configuration changes."
    }
  },
  {
    "q": "A government agency needs evidence of AWS compliance with ISO 27001 and SOC 2 standards. Which AWS service provides this documentation?",
    "choices": [
      "AWS Artifact",
      "AWS Audit Manager",
      "AWS Security Hub",
      "Amazon CloudWatch"
    ],
    "answer": 0,
    "explain": "AWS Artifact provides downloadable compliance reports and audit documentation such as ISO and SOC certifications.",
    "why_others_are_not_correct": {
      "1": "Audit Manager helps create custom compliance reports, not AWS certifications.",
      "2": "Security Hub identifies findings, not documentation.",
      "3": "CloudWatch monitors performance, not compliance."
    }
  },
  {
    "q": "An administrator wants to analyze network traffic patterns and identify unusual connections that may indicate a security issue. Which service can help detect this?",
    "choices": [
      "AWS CloudTrail",
      "Amazon GuardDuty",
      "AWS WAF",
      "AWS Systems Manager"
    ],
    "answer": 1,
    "explain": "Amazon GuardDuty analyzes VPC Flow Logs and DNS logs to detect suspicious network activity or unauthorized behavior.",
    "why_others_are_not_correct": {
      "0": "CloudTrail logs API activity, not network flow.",
      "2": "WAF filters HTTP requests, not analyzes network traffic.",
      "3": "Systems Manager manages resources, not security analytics."
    }
  },
  {
    "q": "Which of the following best practices helps protect access to the AWS account root user?",
    "choices": [
      "Use the root user only for billing and account-management tasks and enable multi-factor authentication (MFA)",
      "Use the root user for everyday administrative tasks so that you know who is doing what",
      "Share root user credentials with all administrators to ensure redundancy",
      "Create an IAM user, delete the root user, and rely solely on IAM"
    ],
    "answer": 0,
    "explain": "Best practice is to lock down the root user-enable MFA, use it only for account/billing tasks, and create separate IAM users for administrative functions.",
    "why_others_are_not_correct": {
      "1": "Using root for everyday tasks increases risk since it has unlimited permissions.",
      "2": "Sharing root credentials increases exposure and weakens accountability.",
      "3": "You cannot delete the root user; you must secure it instead."
    }
  },
  {
    "q": "Scenario: A company must enforce the principle of least privilege across multiple teams and AWS accounts. Which combination of controls is best practice?",
    "choices": [
      "Grant full AdministratorAccess to all team members and rely on training",
      "Use IAM roles for tasks, apply service control policies (SCPs) via AWS Organizations, and monitor permissions regularly",
      "Allow teams to create their own IAM users freely and audit annually",
      "Use the root user for daily tasks and lock down IAM completely"
    ],
    "answer": 1,
    "explain": "Best practice for least privilege across accounts is to use IAM roles for specific tasks, restrict via SCPs through AWS Organizations, and monitor/ audit permissions frequently.",
    "why_others_are_not_correct": {
      "0": "Granting AdministratorAccess to all members violates least privilege.",
      "2": "Allowing unchecked IAM user creation and only auditing annually is too lax.",
      "3": "Using root for daily tasks is high risk and not recommended."
    }
  },
  {
    "q": "Which AWS service provides detailed logs of API calls for auditing, troubleshooting and compliance purposes?",
    "choices": [
      "AWS CloudTrail",
      "AWS Config",
      "AWS GuardDuty",
      "Amazon CloudWatch"
    ],
    "answer": 0,
    "explain": "AWS CloudTrail records AWS API calls including who made them, when, from where and is essential for audit and compliance purposes.",
    "why_others_are_not_correct": {
      "1": "AWS Config records resource configuration changes but not all API calls.",
      "2": "GuardDuty detects threats but does not log all API activity for audits.",
      "3": "CloudWatch monitors metrics and logs but is not designed specifically for API call tracking."
    }
  },
  {
    "q": "Scenario: An organization stores consumer personal data and needs to ensure data is encrypted both at rest and in transit, and minimize exposure. Which AWS best practices apply?",
    "choices": [
      "Use server-side encryption with AWS-managed keys (SSE-S3), enable TLS for in-transit communications, restrict access via IAM policies",
      "Store data unencrypted and rely on network isolation alone",
      "Use plaintext access and rely on auditing to detect misuse",
      "Use only customer-provided encryption but allow broad IAM access"
    ],
    "answer": 0,
    "explain": "Best practice for protecting sensitive data is encrypting at rest (e.g., SSE-S3) and in transit (TLS), and restricting access with IAM policies to reduce exposure.",
    "why_others_are_not_correct": {
      "1": "Unencrypted data and only network isolation do not meet encryption or least-access best practices.",
      "2": "Plaintext access violates basic data protection standards.",
      "3": "Using customer-provided keys alone without strict IAM controls still risks exposure."
    }
  },
  {
    "q": "Which service allows you to download AWS’s compliance reports such as SOC, ISO, and PCI-DSS for evidence to auditors?",
    "choices": [
      "AWS Artifact",
      "AWS Security Hub",
      "AWS Config",
      "AWS Trusted Advisor"
    ],
    "answer": 0,
    "explain": "AWS Artifact gives customers access to AWS’s compliance documentation and audit reports (SOC, ISO, PCI-DSS) for regulatory evidence.  [oai_citation:0‡examtopics.com](https://www.examtopics.com/discussions/amazon/view/34259-exam-aws-certified-cloud-practitioner-topic-1-question-108/?utm_source=chatgpt.com)",
    "why_others_are_not_correct": {
      "1": "Security Hub aggregates security findings but not the official compliance reports.",
      "2": "Config monitors resource configurations, not compliance downloadable reports.",
      "3": "Trusted Advisor gives best-practice & optimization checks, not audit reports."
    }
  }
]
