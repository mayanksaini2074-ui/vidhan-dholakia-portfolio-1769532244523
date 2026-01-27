import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Vidhan Dholakia",
    "title": "Operations and Retail Professional",
    "email": "vidhandholakia7@gmail.com",
    "phone": "+1 343-580-7600",
    "linkedin": "",
    "github": "",
    "location": "Ontario, Canada",
    "summary": "Dedicated operations and retail professional with over 5 years of experience in leading teams, managing workflows, inventory, invoicing, and customer service. Skilled in improving processes, coordinating operations, and implementing automation to enhance efficiency across retail, grocery, and office operations."
  },
  "experience": [
    {
      "title": "Office Automation Specialist",
      "company": "Rimperfection",
      "dates": "October 2024 - Present",
      "description": "Assisted with automated call routing and managed appointment scheduling. Implemented email automation for follow-ups and refined workflows using Bubbles APIs.",
      "highlights": [
        "Supported management in automation initiatives and process improvements.",
        "Streamlined customer communication using Bubbles AI."
      ]
    },
    {
      "title": "Shop Operations Supervisor & Coordinator",
      "company": "Rimperfection",
      "dates": "March 2025 – January 2026",
      "description": "Managed shop operations, including customer service, scheduling, invoicing, and repair approvals.",
      "highlights": [
        "Led technicians and ensured timely work with Monday.com.",
        "Maintained inventory records and purchase orders using WAVE."
      ]
    },
    {
      "title": "Client Operations & Business Support",
      "company": "Rogers",
      "dates": "December 2024 - Feb 2025",
      "description": "Maintained customer records and streamlined workflows for business operations.",
      "highlights": [
        "Reduced manual follow-ups and improved task efficiency using MS Project.",
        "Supported process improvements enhancing productivity."
      ]
    },
    {
      "title": "Produce Manager",
      "company": "Food Basics",
      "dates": "April 2024 – July 2024",
      "description": "Managed department performance while meeting profitability targets and led a team of associates.",
      "highlights": [
        "Increased sales through merchandising strategies.",
        "Ensured compliance with food safety and audit requirements."
      ]
    },
    {
      "title": "Produce Retail Clerk / Supervisor",
      "company": "Food Basics",
      "dates": "Jan 2020 – April 2024",
      "description": "Managed produce operations and trained team members for improved service and reduced complaints.",
      "highlights": [
        "Maintained 100% compliance with food safety standards.",
        "Reduced inventory waste using FIFO practices."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Computer Engineering",
      "institution": "Queens University, Canada",
      "years": "2019 - 2021",
      "gpa": ""
    },
    {
      "degree": "Bachelor of Technology in Computer Engineering",
      "institution": "Charusat University of Science and Technology, India",
      "years": "2015 - 2019",
      "gpa": ""
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": []
};

export const sectionConfig: SectionConfig = {
  "hero": "shiny-text",
  "about": "simple",
  "experience": "list",
  "projects": "grid",
  "skills": "bars",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
