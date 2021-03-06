create table PROFESSOR
(
    PROFNO   NUMBER(4)    not null
        primary key,
    NAME     VARCHAR2(10) not null,
    ID       VARCHAR2(15) not null,
    POSITION VARCHAR2(15) not null,
    PAY      NUMBER(3)    not null,
    HIREDATE DATE         not null,
    BONUS    NUMBER(4),
    DEPTNO   NUMBER(3),
    EMAIL    VARCHAR2(50),
    HPAGE    VARCHAR2(50)
)
/

INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (1001, '조인형', 'captain', '정교수', 550, TO_DATE('1980-06-23', 'YYYY-MM-DD HH24:MI:SS'), 100, 101, 'captain@abc.net', 'http://www.abc.net');
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (1002, '박승곤', 'sweety', '조교수', 380, TO_DATE('1987-01-30', 'YYYY-MM-DD HH24:MI:SS'), 60, 101, 'sweety@abc.net', 'http://www.abc.net');
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (1003, '송도권', 'powerman', '전임강사', 270, TO_DATE('1998-03-22', 'YYYY-MM-DD HH24:MI:SS'), null, 101, 'pman@power.com', 'http://www.power.com');
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (2001, '양선희', 'lamb1', '전임강사', 250, TO_DATE('2001-09-01', 'YYYY-MM-DD HH24:MI:SS'), null, 102, 'lamb1@hamail.net', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (2002, '김영조', 'number1', '조교수', 350, TO_DATE('1985-11-30', 'YYYY-MM-DD HH24:MI:SS'), 80, 102, 'number1@naver.com', 'http://num1.naver.com');
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (2003, '주승재', 'bluedragon', '정교수', 490, TO_DATE('1982-04-29', 'YYYY-MM-DD HH24:MI:SS'), 90, 102, 'bdragon@naver.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (3001, '김도형', 'angel1004', '정교수', 530, TO_DATE('1981-10-23', 'YYYY-MM-DD HH24:MI:SS'), 110, 103, 'angel1004@hanmir.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (3002, '나한열', 'naone10', '조교수', 330, TO_DATE('1997-07-01', 'YYYY-MM-DD HH24:MI:SS'), 50, 103, 'naone10@empal.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (3003, '김현정', 'only-u', '전임강사', 290, TO_DATE('2002-02-24', 'YYYY-MM-DD HH24:MI:SS'), null, 103, 'only_u@abc.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4001, '심슨', 'simson', '정교수', 570, TO_DATE('1981-10-23', 'YYYY-MM-DD HH24:MI:SS'), 130, 201, 'chebin@daum.net', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4002, '최슬기', 'gogogo', '조교수', 330, TO_DATE('2009-08-30', 'YYYY-MM-DD HH24:MI:SS'), null, 201, 'gogogo@def.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4003, '박원범', 'mypride', '조교수', 310, TO_DATE('1999-12-01', 'YYYY-MM-DD HH24:MI:SS'), 50, 202, 'mypride@hanmail.net', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4004, '차범철', 'ironman', '전임강사', 260, TO_DATE('2009-01-28', 'YYYY-MM-DD HH24:MI:SS'), null, 202, 'ironman@naver.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4005, '바비', 'standkang', '정교수', 500, TO_DATE('1985-09-18', 'YYYY-MM-DD HH24:MI:SS'), 80, 203, 'standkang@naver.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4006, '전민', 'napeople', '전임강사', 220, TO_DATE('2010-06-28', 'YYYY-MM-DD HH24:MI:SS'), null, 301, 'napeople@jass.com', null);
INSERT INTO HR.PROFESSOR (PROFNO, NAME, ID, POSITION, PAY, HIREDATE, BONUS, DEPTNO, EMAIL, HPAGE) VALUES (4007, '허은', 'silver-her', '조교수', 290, TO_DATE('2001-05-23', 'YYYY-MM-DD HH24:MI:SS'), 30, 301, 'silver-her@daum.net', null);