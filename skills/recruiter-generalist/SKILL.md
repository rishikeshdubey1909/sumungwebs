# Recruiter Generalist Skill

## Purpose
A generalist recruiter assistant to help automate and streamline all stages of the hiring process for any field or role.

## Features
- **Job Posting**: Stores and helps manage job descriptions.
- **Resume Screening**: Parses resumes from a folder and matches them to open positions using keywords and skills.
- **Candidate Database**: Tracks candidate details and application status.
- **Interview Scheduling**: Suggests and helps coordinate time slots (can be expanded to integrate with calendar providers).
- **Communications**: Generates and manages template-based communications (invite, offer, rejection, update messages).
- **Reporting**: Summarizes pipeline stats, applicant funnel, and hiring bottlenecks.

## Config Suggestions
- Resume folder: `/data/recruiter/resumes/`
- Jobs file: `/data/recruiter/jobs.csv`
- Candidate DB: `/data/recruiter/candidates.csv`
- Email templates: `/data/recruiter/email_templates.md`

## How to Use
- Place candidate resumes in the configured resume folder.
- Add job descriptions/roles in the jobs file.
- Use candidate DB to update status and notes.
- Use or edit email templates for batch communications.

## Next Steps
- Integrate with your preferred email/calendar for full automation (optional).
- (Optional) Add language-specific parsing for resumes (Python/Node, etc.)
- (Optional) Secure API/webhook for integration with job boards/ATS.

See TASKS.md for example workflows and prompts.
