create table JOBS
(
    JOB_ID     VARCHAR2(10) not null
        constraint JOB_ID_PK
            primary key,
    JOB_TITLE  VARCHAR2(35) not null
        constraint JOB_TITLE_NN
            check ("JOB_TITLE" IS NOT NULL),
    MIN_SALARY NUMBER(6),
    MAX_SALARY NUMBER(6)
)
/

comment on table JOBS is 'jobs table with job titles and salary ranges. Contains 19 rows.
References with employees and job_history table.'
/

comment on column JOBS.JOB_ID is 'Primary key of jobs table.'
/

comment on column JOBS.JOB_TITLE is 'A not null column that shows job title, e.g. AD_VP, FI_ACCOUNTANT'
/

comment on column JOBS.MIN_SALARY is 'Minimum salary for a job title.'
/

comment on column JOBS.MAX_SALARY is 'Maximum salary for a job title'
/

INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('AD_PRES', 'President', 20080, 40000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('AD_VP', 'Administration Vice President', 15000, 30000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('AD_ASST', 'Administration Assistant', 3000, 6000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('FI_MGR', 'Finance Manager', 8200, 16000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('FI_ACCOUNT', 'Accountant', 4200, 9000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('AC_MGR', 'Accounting Manager', 8200, 16000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('AC_ACCOUNT', 'Public Accountant', 4200, 9000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('SA_MAN', 'Sales Manager', 10000, 20080);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('SA_REP', 'Sales Representative', 6000, 12008);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('PU_MAN', 'Purchasing Manager', 8000, 15000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('PU_CLERK', 'Purchasing Clerk', 2500, 5500);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('ST_MAN', 'Stock Manager', 5500, 8500);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('ST_CLERK', 'Stock Clerk', 2008, 5000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('SH_CLERK', 'Shipping Clerk', 2500, 5500);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('IT_PROG', 'Programmer', 4000, 10000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('MK_MAN', 'Marketing Manager', 9000, 15000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('MK_REP', 'Marketing Representative', 4000, 9000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('HR_REP', 'Human Resources Representative', 4000, 9000);
INSERT INTO HR.JOBS (JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY) VALUES ('PR_REP', 'Public Relations Representative', 4500, 10500);