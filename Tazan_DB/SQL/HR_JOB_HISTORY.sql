create table JOB_HISTORY
(
    EMPLOYEE_ID   NUMBER(6)    not null
        constraint JHIST_EMP_FK
            references EMPLOYEES
        constraint JHIST_EMPLOYEE_NN
            check ("EMPLOYEE_ID" IS NOT NULL),
    START_DATE    DATE         not null
        constraint JHIST_START_DATE_NN
            check ("START_DATE" IS NOT NULL),
    END_DATE      DATE         not null
        constraint JHIST_END_DATE_NN
            check ("END_DATE" IS NOT NULL),
    JOB_ID        VARCHAR2(10) not null
        constraint JHIST_JOB_FK
            references JOBS
        constraint JHIST_JOB_NN
            check ("JOB_ID" IS NOT NULL),
    DEPARTMENT_ID NUMBER(4)
        constraint JHIST_DEPT_FK
            references DEPARTMENTS,
    constraint JHIST_EMP_ID_ST_DATE_PK
        primary key (EMPLOYEE_ID, START_DATE),
    constraint JHIST_DATE_INTERVAL
        check (end_date > start_date)
)
/

comment on table JOB_HISTORY is 'Table that stores job history of the employees. If an employee
changes departments within the job or changes jobs within the department,
new rows get inserted into this table with old job information of the
employee. Contains a complex primary key: employee_id+start_date.
Contains 25 rows. References with jobs, employees, and departments tables.'
/

comment on column JOB_HISTORY.EMPLOYEE_ID is 'A not null column in the complex primary key employee_id+start_date.
Foreign key to employee_id column of the employee table'
/

comment on column JOB_HISTORY.START_DATE is 'A not null column in the complex primary key employee_id+start_date.
Must be less than the end_date of the job_history table. (enforced by
constraint jhist_date_interval)'
/

comment on column JOB_HISTORY.END_DATE is 'Last day of the employee in this job role. A not null column. Must be
greater than the start_date of the job_history table.
(enforced by constraint jhist_date_interval)'
/

comment on column JOB_HISTORY.JOB_ID is 'Job role in which the employee worked in the past; foreign key to
job_id column in the jobs table. A not null column.'
/

comment on column JOB_HISTORY.DEPARTMENT_ID is 'Department id in which the employee worked in the past; foreign key to deparment_id column in the departments table'
/

create index JHIST_JOB_IX
    on JOB_HISTORY (JOB_ID)
/

create index JHIST_EMPLOYEE_IX
    on JOB_HISTORY (EMPLOYEE_ID)
/

create index JHIST_DEPARTMENT_IX
    on JOB_HISTORY (DEPARTMENT_ID)
/

INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (102, TO_DATE('2001-01-13', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2006-07-24', 'YYYY-MM-DD HH24:MI:SS'), 'IT_PROG', 60);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (101, TO_DATE('1997-09-21', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2001-10-27', 'YYYY-MM-DD HH24:MI:SS'), 'AC_ACCOUNT', 110);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (101, TO_DATE('2001-10-28', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2005-03-15', 'YYYY-MM-DD HH24:MI:SS'), 'AC_MGR', 110);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (201, TO_DATE('2004-02-17', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2007-12-19', 'YYYY-MM-DD HH24:MI:SS'), 'MK_REP', 20);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (114, TO_DATE('2006-03-24', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2007-12-31', 'YYYY-MM-DD HH24:MI:SS'), 'ST_CLERK', 50);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (122, TO_DATE('2007-01-01', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2007-12-31', 'YYYY-MM-DD HH24:MI:SS'), 'ST_CLERK', 50);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (200, TO_DATE('1995-09-17', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2001-06-17', 'YYYY-MM-DD HH24:MI:SS'), 'AD_ASST', 90);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (176, TO_DATE('2006-03-24', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2006-12-31', 'YYYY-MM-DD HH24:MI:SS'), 'SA_REP', 80);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (176, TO_DATE('2007-01-01', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2007-12-31', 'YYYY-MM-DD HH24:MI:SS'), 'SA_MAN', 80);
INSERT INTO HR.JOB_HISTORY (EMPLOYEE_ID, START_DATE, END_DATE, JOB_ID, DEPARTMENT_ID) VALUES (200, TO_DATE('2002-07-01', 'YYYY-MM-DD HH24:MI:SS'), TO_DATE('2006-12-31', 'YYYY-MM-DD HH24:MI:SS'), 'AC_ACCOUNT', 90);