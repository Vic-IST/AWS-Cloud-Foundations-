window.quizBanks = window.quizBanks || {};
window.quizBanks.mod04 = [
  {
    "q": "Which of the following best describes the AWS pricing model?",
    "choices": [
      "Pay a fixed monthly cost for all resources used or unused",
      "Pay-as-you-go for only the resources you consume",
      "Pay in advance for a one-year subscription of all services",
      "Pay an annual license fee for each AWS Region used"
    ],
    "answer": 1,
    "explain": "AWS uses a pay-as-you-go model, meaning customers are billed based on their actual usage of resources rather than fixed costs or subscriptions.",
    "why_others_are_not_correct": {
      "0": "Fixed costs resemble traditional IT purchasing, not cloud pricing.",
      "2": "Upfront payments are optional (e.g., Savings Plans), not required for all services.",
      "3": "There are no regional license fees in AWS."
    }
  },
  {
  "q": "Your web application needs four instances to support steady traffic all of the time. On the last day of the month, the traffic triples. What is the most cost-effective way to handle this pattern? (Select the best answer)",
  "choices": [
    "Run 12 Reserved Instances all of the time.",
    "Run four On-Demand Instances constantly, then add eight more On-Demand Instances on the last day of each month.",
    "Run four Reserved Instances constantly, then add eight On-Demand Instances on the last day of each month.",
    "Run four On-Demand Instances constantly, then add eight Reserved Instances on the last day of each month."
  ],
  "answer": 2,
  "explain": "The steady, predictable baseline workload (4 instances running 24/7) should be covered with Reserved Instances because they provide a major discount for long-term, always-on usage. The monthly spike requires temporary capacity, so On-Demand Instances are the most cost-effective way to handle short-term bursts without long-term commitment.",
  "why_others_are_not_correct": {
    "0": "Running 12 Reserved Instances all month would waste money—only 4 are needed constantly, and buying Reserved Instances for a workload that only exists one day per month is not cost-effective.",
    "1": "Running all instances On-Demand ignores the large savings available from using Reserved Instances for the steady workload that runs every day.",
    "3": "Reserved Instances require 1- or 3-year commitments. Buying RIs for instances used only one day per month wastes money and provides no meaningful benefit."
  }
},
  {
    "q": "A company wants to estimate the monthly cost of running its new web application on AWS. Which tool should they use?",
    "choices": [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Trusted Advisor"
    ],
    "answer": 0,
    "explain": "The AWS Pricing Calculator allows users to estimate and model AWS costs before deploying resources.",
    "why_others_are_not_correct": {
      "1": "Cost Explorer analyzes existing usage, not future estimates.",
      "2": "Budgets tracks and alerts on spending but doesn’t estimate costs.",
      "3": "Trusted Advisor provides best-practice recommendations, not cost projections."
    }
  },
  {
    "q": "Which pricing model offers significant savings in exchange for a one- or three-year commitment to a consistent amount of usage?",
    "choices": [
      "On-Demand Instances",
      "Savings Plans",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    "answer": 1,
    "explain": "Savings Plans provide flexible pricing and discounts (up to 72%) for committing to consistent usage over one or three years.",
    "why_others_are_not_correct": {
      "0": "On-Demand pricing charges by the hour or second with no long-term commitment.",
      "2": "Spot Instances use spare capacity but don’t require commitments.",
      "3": "Dedicated Hosts allocate physical servers but are not a discount model."
    }
  },
  {
    "q": "A data analytics company wants to purchase spare AWS compute capacity at the lowest possible price. Which pricing option should they choose?",
    "choices": [
      "Savings Plans",
      "On-Demand Instances",
      "Spot Instances",
      "Dedicated Hosts"
    ],
    "answer": 2,
    "explain": "Spot Instances offer unused EC2 capacity at discounts up to 90% off On-Demand prices - ideal for flexible or fault-tolerant workloads.",
    "why_others_are_not_correct": {
      "0": "Savings Plans require predictable usage commitments, not opportunistic savings.",
      "1": "On-Demand Instances are more expensive and lack discounts.",
      "3": "Dedicated Hosts are for license control, not cost savings."
    }
  },
  {
    "q": "A company wants to track its spending and receive alerts when costs approach a predefined limit. Which AWS tool provides this functionality?",
    "choices": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Organizations"
    ],
    "answer": 0,
    "explain": "AWS Budgets enables users to set custom cost and usage limits and receive alerts when thresholds are exceeded.",
    "why_others_are_not_correct": {
      "1": "Cost Explorer visualizes past spending, not alerts.",
      "2": "Pricing Calculator estimates potential costs, not monitors actual use.",
      "3": "Organizations consolidates billing but doesn’t provide alerts."
    }
  },
  {
    "q": "Which AWS service helps visualize and analyze historical spending patterns across accounts?",
    "choices": [
      "AWS Budgets",
      "AWS Cost Explorer",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor"
    ],
    "answer": 1,
    "explain": "AWS Cost Explorer provides visual reports on AWS usage and cost trends to help optimize spending over time.",
    "why_others_are_not_correct": {
      "0": "Budgets sets thresholds but doesn’t provide detailed visual analysis.",
      "2": "Pricing Calculator estimates costs before use, not historical data.",
      "3": "Trusted Advisor gives optimization advice but not cost graphs."
    }
  },
  {
    "q": "A company has multiple AWS accounts and wants to simplify its billing by receiving a single invoice. Which AWS feature allows this?",
    "choices": [
      "AWS Organizations consolidated billing",
      "AWS Budgets",
      "AWS Billing Conductor",
      "AWS Cost Explorer"
    ],
    "answer": 0,
    "explain": "AWS Organizations offers consolidated billing, combining charges from linked accounts into a single invoice.",
    "why_others_are_not_correct": {
      "1": "Budgets monitors spending but doesn’t consolidate bills.",
      "2": "Billing Conductor customizes cost allocation but doesn’t combine invoices.",
      "3": "Cost Explorer analyzes spending but doesn’t consolidate billing."
    }
  },
  {
    "q": "Which AWS Support Plan includes access to a designated Technical Account Manager (TAM)?",
    "choices": [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    "answer": 3,
    "explain": "Enterprise Support provides a dedicated Technical Account Manager (TAM) and 24/7 support with architectural guidance.",
    "why_others_are_not_correct": {
      "0": "Basic Support offers only documentation and community forums.",
      "1": "Developer Support provides business-hour technical guidance but no TAM.",
      "2": "Business Support includes 24/7 access to Cloud Support Engineers but not a dedicated TAM."
    }
  },
  {
    "q": "A startup wants to use AWS services for free while testing new ideas. Which program provides limited usage of certain AWS services at no cost?",
    "choices": [
      "AWS Promotional Credits",
      "AWS Savings Plans",
      "AWS Free Tier",
      "AWS Activate"
    ],
    "answer": 2,
    "explain": "The AWS Free Tier provides limited, free usage of certain AWS services for 12 months or permanently, depending on the service.",
    "why_others_are_not_correct": {
      "0": "Promotional credits are one-time benefits, not a structured tier.",
      "1": "Savings Plans are paid discount programs, not free.",
      "3": "Activate supports startups with credits but isn’t the Free Tier itself."
    }
  },
  {
    "q": "Which support plan is best for a small development team experimenting with AWS and needing guidance during business hours?",
    "choices": [
      "Basic Support",
      "Developer Support",
      "Business Support",
      "Enterprise Support"
    ],
    "answer": 1,
    "explain": "Developer Support is ideal for teams building and testing on AWS, providing business-hour email access to Cloud Support Engineers.",
    "why_others_are_not_correct": {
      "0": "Basic Support offers no access to technical support engineers.",
      "2": "Business Support is intended for production environments with 24/7 access.",
      "3": "Enterprise Support is for mission-critical enterprise workloads."
    }
  },
  {
    "q": "Which AWS service provides an automated way to evaluate and recommend cost-saving opportunities across your AWS environment?",
    "choices": [
      "AWS Trusted Advisor",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Pricing Calculator"
    ],
    "answer": 0,
    "explain": "AWS Trusted Advisor checks for cost optimization opportunities, including underutilized resources and reserved instance recommendations.",
    "why_others_are_not_correct": {
      "1": "Cost Explorer visualizes cost data but does not provide automated recommendations.",
      "2": "Budgets monitors spending but doesn’t analyze optimization opportunities.",
      "3": "Pricing Calculator estimates costs before deployment, not post-use savings."
    }
  },
  {
    "q": "A company is migrating to AWS and wants to compare the cost of running workloads on-premises versus in the AWS Cloud. Which tool can help?",
    "choices": [
      "AWS Migration Evaluator",
      "AWS Pricing Calculator",
      "AWS Budgets",
      "AWS CloudFormation"
    ],
    "answer": 0,
    "explain": "AWS Migration Evaluator provides data-driven cost comparisons between on-premises and AWS environments to build a migration business case.",
    "why_others_are_not_correct": {
      "1": "Pricing Calculator estimates AWS costs only, not on-premises comparisons.",
      "2": "Budgets tracks cloud spending but doesn’t compare environments.",
      "3": "CloudFormation automates infrastructure deployment, not cost analysis."
    }
  },
  {
    "q": "Which AWS service or tool helps customers model their solutions and understand pricing before deploying resources?",
    "choices": [
      "AWS Pricing Calculator",
      "AWS Cost Explorer",
      "AWS Budgets",
      "AWS Organizations"
    ],
    "answer": 0,
    "explain": "AWS Pricing Calculator lets users model AWS architectures and estimate pricing before creating resources.",
    "why_others_are_not_correct": {
      "1": "Cost Explorer analyzes existing usage, not estimates.",
      "2": "Budgets tracks spending but does not model new deployments.",
      "3": "Organizations manages accounts, not cost modeling."
    }
  },
  {
    "q": "Which AWS pricing model provides the most flexibility for unpredictable workloads?",
    "choices": [
      "On-Demand",
      "Reserved Instances",
      "Savings Plans",
      "Dedicated Hosts"
    ],
    "answer": 0,
    "explain": "On-Demand pricing is best for unpredictable workloads since you pay per use with no long-term commitments.",
    "why_others_are_not_correct": {
      "1": "Reserved Instances require 1–3 year commitments.",
      "2": "Savings Plans also require a consistent usage commitment.",
      "3": "Dedicated Hosts are for licensing and compliance, not flexibility."
    }
  },
  {
    "q": "A financial institution must separate billing and access between departments while keeping overall payment under one account. Which AWS feature supports this?",
    "choices": [
      "AWS Organizations with consolidated billing",
      "AWS IAM roles",
      "AWS Cost Explorer",
      "AWS Budgets"
    ],
    "answer": 0,
    "explain": "AWS Organizations allows separate accounts for each department while combining charges into a single invoice under consolidated billing.",
    "why_others_are_not_correct": {
      "1": "IAM manages user permissions, not billing separation.",
      "2": "Cost Explorer provides spending analysis, not account-level billing structure.",
      "3": "Budgets tracks costs but doesn’t manage multi-account billing."
    }
  },
  {
    "q": "Which AWS Support plan is best for businesses running production workloads that require 24/7 access to technical support?",
    "choices": [
      "Basic",
      "Developer",
      "Business",
      "Enterprise"
    ],
    "answer": 2,
    "explain": "The Business Support plan offers 24/7 access to Cloud Support Engineers via phone, chat, or email for production workloads.",
    "why_others_are_not_correct": {
      "0": "Basic offers no direct technical support.",
      "1": "Developer provides support only during business hours.",
      "3": "Enterprise offers 24/7 support but includes additional services like a Technical Account Manager, beyond what most production workloads need."
    }
  },
  {
    "q": "Which AWS program provides credits and support resources specifically for startups building on AWS?",
    "choices": [
      "AWS Free Tier",
      "AWS Activate",
      "AWS Enterprise Discount Program",
      "AWS Promotional Credits"
    ],
    "answer": 1,
    "explain": "AWS Activate supports startups by providing AWS credits, training, and business support to accelerate cloud adoption.",
    "why_others_are_not_correct": {
      "0": "Free Tier provides limited, ongoing free usage for all users, not a startup program.",
      "2": "Enterprise Discount Program targets large organizations, not startups.",
      "3": "Promotional Credits are one-time offers, not part of an ongoing startup initiative."
    }
  },
  {
    "q": "Which of the following is a key benefit of using AWS consolidated billing under AWS Organizations?",
    "choices": [
      "Each account pays separately with unique invoices",
      "Unused volume discounts are applied across all linked accounts",
      "It prevents cost visibility across member accounts",
      "It limits payment responsibility to each individual team"
    ],
    "answer": 1,
    "explain": "Consolidated billing combines usage from all accounts, allowing shared access to volume discounts and cost optimization.",
    "why_others_are_not_correct": {
      "0": "Consolidated billing provides a single invoice, not separate ones.",
      "2": "It increases visibility, not prevents it.",
      "3": "The payer account manages payment for all linked accounts."
    }
  },
  {
    "q": "Which AWS service or feature provides recommendations for rightsizing EC2 instances to reduce costs?",
    "choices": [
      "AWS Compute Optimizer",
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "AWS CloudFormation"
    ],
    "answer": 0,
    "explain": "AWS Compute Optimizer analyzes historical usage data and recommends optimal EC2 instance types to reduce cost and improve performance.",
    "why_others_are_not_correct": {
      "1": "Cost Explorer visualizes cost trends but doesn’t suggest EC2 instance types.",
      "2": "Trusted Advisor provides general optimization checks but not detailed instance recommendations.",
      "3": "CloudFormation automates deployments, not cost optimization."
    }
  },
  {
    "q": "A company wants to ensure that all departments understand their individual AWS costs each month. Which feature enables cost allocation by team or project?",
    "choices": [
      "Cost Allocation Tags",
      "AWS Budgets",
      "AWS Savings Plans",
      "AWS CloudTrail"
    ],
    "answer": 0,
    "explain": "Cost Allocation Tags let you label resources by department, project, or environment and generate detailed cost reports for each category.",
    "why_others_are_not_correct": {
      "1": "Budgets sets spending alerts but doesn’t categorize costs.",
      "2": "Savings Plans optimize compute pricing, not cost tracking by team.",
      "3": "CloudTrail logs API calls but doesn’t track billing information."
    }
  },
  {
    "q": "Which of the following is a best practice for managing AWS billing across multiple teams or projects?",
    "choices": [
      "Keep all resources in a single AWS account and manually tag costs by department later",
      "Use separate AWS accounts per team/project, enable consolidated billing through AWS Organizations, and apply cost allocation tags",
      "Disable cost-allocation tags and rely solely on spreadsheets for cost breakdowns",
      "Purchase Reserved Instances in one account but allocate their benefit manually across others"
    ],
    "answer": 1,
    "explain": "Best practice for cost governance is to structure accounts by team/project, use AWS Organizations for consolidated billing, and apply cost-allocation tags to attribute spend accurately.",
    "why_others_are_not_correct": {
      "0": "A single account loses isolation of spend and complicates ownership and charge-back.",
      "2": "Disabling tags removes key visibility needed for cost management.",
      "3": "Manual allocation of Reserved Instance benefits is error-prone and lacks automation for governance."
    }
  },
  {
    "q": "Scenario: A startup is running dev/test workloads on AWS that only need to operate during business hours. How should they optimize cost while still using AWS services?",
    "choices": [
      "Keep all the development servers running 24×7 and rely on On-Demand pricing",
      "Use On-Demand pricing during business hours, schedule non-production instances to stop during off-hours, and review usage monthly",
      "Purchase 3-year Reserved Instances for all dev/test servers assuming they’ll be used eventually",
      "Use Spot Instances for the dev/test servers, even if the workloads cannot tolerate interruptions"
    ],
    "answer": 1,
    "explain": "Best practice is to schedule non-production workloads to stop when not needed, using On-Demand (or other pricing models) during active hours, which reduces waste and cost.",
    "why_others_are_not_correct": {
      "0": "Running servers 24×7 when they’re only needed part-time wastes cost.",
      "2": "3-year Reserved Instances assume constant use and lock in cost without assurance of usage-too risky for dev/test.",
      "3": "Spot Instances save cost but might be interrupted; if workloads can’t tolerate that, it’s not appropriate."
    }
  },
  {
    "q": "Which AWS tool is considered best practice for setting cost thresholds and receiving alerts when usage or spending exceeds expected levels?",
    "choices": [
      "AWS Cost Explorer only",
      "AWS Budgets",
      "AWS Pricing Calculator",
      "AWS Trusted Advisor Cost Checks"
    ],
    "answer": 1,
    "explain": "AWS Budgets allows you to define cost or usage thresholds and get alerts when you exceed them, enabling proactive spending control.",
    "why_others_are_not_correct": {
      "0": "Cost Explorer analyses spend after the fact; it doesn’t inherently provide proactive threshold alerts.",
      "2": "Pricing Calculator estimates future spend but doesn’t monitor actual usage and alert.",
      "3": "Trusted Advisor offers optimization recommendations but not cost‐alerting thresholds in that way."
    }
  },
  {
    "q": "Scenario: A large enterprise uses many AWS services across regions and accounts. They notice that utilization discounts are not being fully applied. What best practice should they implement to capture maximum pricing benefits?",
    "choices": [
      "Keep each account’s Reserved Instances and Savings Plans isolated, so each team manages their own commitments",
      "Use consolidated billing with AWS Organizations to pool usage across linked accounts, apply volume discounts centrally, and regularly review commitment utilization",
      "Avoid Reserved Instances and Savings Plans altogether and rely only on On-Demand pricing to stay flexible",
      "Use spot pricing exclusively for all workloads, including mission-critical ones, to maximize discounts"
    ],
    "answer": 1,
    "explain": "Pooling usage across linked accounts via consolidated billing enables capture of volume discounts and better utilization of commitments such as Reserved Instances and Savings Plans-this is a best practice for cost optimization at scale.",
    "why_others_are_not_correct": {
      "0": "Isolating commitments prevents sharing of volume discounts and reduces overall savings.",
      "2": "Avoiding commitments sacrifices large potential savings for predictable workloads.",
      "3": "Spot pricing is risky for mission‐critical workloads due to possible interruptions and does not capture commitment discounts."
    }
  },
  {
    "q": "Which of the following is a best practice when choosing an AWS Support Plan for a production workload?",
    "choices": [
      "Choose the Basic Support plan since it’s free and sufficient for all workloads",
      "Choose the Developer Support plan for all production workloads because it’s the next tier up",
      "Match the support plan’s SLAs and features to the business’s operational needs and budget - e.g., Business or Enterprise if 24×7 support and a Technical Account Manager are required",
      "Skip support plan selection and rely on community forums for all issues"
    ],
    "answer": 2,
    "explain": "Best practice is to choose the support level appropriate for your business needs - production workloads often require 24×7 support and higher SLAs, so Business or Enterprise support may be required.",
    "why_others_are_not_correct": {
      "0": "Basic Support has limitations and may not provide the response times or features needed for production workloads.",
      "1": "Developer Support is aimed at non‐production or development environments and may not meet production SLA requirements.",
      "3": "Community forums alone are not sufficient for mission‐critical issues and lack guaranteed SLA response."
    }
  }
];

