create table STUDENT
(
    STUDNO   NUMBER(4)    not null
        primary key,
    NAME     VARCHAR2(10) not null,
    ID       VARCHAR2(20) not null
        unique,
    GRADE    NUMBER
        check (grade between 1 and 6),
    JUMIN    CHAR(13)     not null,
    BIRTHDAY DATE,
    TEL      VARCHAR2(15),
    HEIGHT   NUMBER(4),
    WEIGHT   NUMBER(3),
    DEPTNO1  NUMBER(3),
    DEPTNO2  NUMBER(3),
    PROFNO   NUMBER(4)
)
/

INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9411, '서진수', '75true', 4, '7510231901813', TO_DATE('1975-10-23', 'YYYY-MM-DD HH24:MI:SS'), '055)381-2158', 180, 72, 101, 201, 1001);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9412, '서재수', 'pooh94', 4, '7502241128467', TO_DATE('1975-02-24', 'YYYY-MM-DD HH24:MI:SS'), '051)426-1700', 172, 64, 102, null, 2001);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9413, '이미경', 'angel000', 4, '7506152123648', TO_DATE('1975-06-15', 'YYYY-MM-DD HH24:MI:SS'), '053)266-8947', 168, 52, 103, 203, 3002);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9414, '김재수', 'gunmandu', 4, '7512251063421', TO_DATE('1975-12-25', 'YYYY-MM-DD HH24:MI:SS'), '02)6255-9875', 177, 83, 201, null, 4001);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9415, '박동호', 'pincle1', 4, '7503031639826', TO_DATE('1975-03-03', 'YYYY-MM-DD HH24:MI:SS'), '031)740-6388', 182, 70, 202, null, 4003);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9511, '김신영', 'bingo', 3, '7601232186327', TO_DATE('1976-01-23', 'YYYY-MM-DD HH24:MI:SS'), '055)333-6328', 164, 48, 101, null, 1002);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9512, '신은경', 'jjang1', 3, '7604122298371', TO_DATE('1976-04-12', 'YYYY-MM-DD HH24:MI:SS'), '051)418-9627', 161, 42, 102, 201, 2002);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9513, '오나라', 'nara5', 3, '7609112118379', TO_DATE('1976-09-11', 'YYYY-MM-DD HH24:MI:SS'), '051)724-9618', 177, 55, 202, null, 4003);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9514, '구유미', 'guyume', 3, '7601202378641', TO_DATE('1976-01-20', 'YYYY-MM-DD HH24:MI:SS'), '055)296-3784', 160, 58, 301, 101, 4007);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9515, '임세현', 'shyun1', 3, '7610122196482', TO_DATE('1976-10-12', 'YYYY-MM-DD HH24:MI:SS'), '02)312-9838', 171, 54, 201, null, 4001);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9611, '일지매', 'onejimae', 2, '7711291186223', TO_DATE('1977-11-29', 'YYYY-MM-DD HH24:MI:SS'), '02)6788-4861', 182, 72, 101, null, 1002);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9612, '김진욱', 'samjang7', 2, '7704021358674', TO_DATE('1977-04-02', 'YYYY-MM-DD HH24:MI:SS'), '055)488-2998', 171, 70, 102, null, 2001);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9613, '안광훈', 'nonnon1', 2, '7709131276431', TO_DATE('1977-09-13', 'YYYY-MM-DD HH24:MI:SS'), '053)736-4981', 175, 82, 201, null, 4002);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9614, '김문호', 'munho', 2, '7702261196365', TO_DATE('1977-02-26', 'YYYY-MM-DD HH24:MI:SS'), '02)6175-3945', 166, 51, 201, null, 4003);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9615, '노정호', 'star123', 2, '7712141254963', TO_DATE('1977-12-14', 'YYYY-MM-DD HH24:MI:SS'), '051)785-6984', 184, 62, 301, null, 4007);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9711, '이윤나', 'prettygirl', 1, '7808192157498', TO_DATE('1978-08-19', 'YYYY-MM-DD HH24:MI:SS'), '055)278-3649', 162, 48, 101, null, null);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9712, '안은수', 'silverwt', 1, '7801051776346', TO_DATE('1978-01-05', 'YYYY-MM-DD HH24:MI:SS'), '02)381-5440', 175, 63, 201, null, null);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9713, '인영민', 'youngmin', 1, '7808091786954', TO_DATE('1978-08-09', 'YYYY-MM-DD HH24:MI:SS'), '031)345-5677', 173, 69, 201, null, null);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9714, '김주현', 'kimjh', 1, '7803241981987', TO_DATE('1978-03-24', 'YYYY-MM-DD HH24:MI:SS'), '055)423-9870', 179, 81, 102, null, null);
INSERT INTO HR.STUDENT (STUDNO, NAME, ID, GRADE, JUMIN, BIRTHDAY, TEL, HEIGHT, WEIGHT, DEPTNO1, DEPTNO2, PROFNO) VALUES (9715, '허우', 'wooya2702', 1, '7802232116784', TO_DATE('1978-02-23', 'YYYY-MM-DD HH24:MI:SS'), '02)6122-2345', 163, 51, 103, null, null);