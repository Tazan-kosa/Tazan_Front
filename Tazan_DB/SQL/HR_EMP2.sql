create table EMP2
(
    EMPNO    NUMBER       not null
        primary key,
    NAME     VARCHAR2(15) not null,
    BIRTHDAY DATE,
    DEPTNO   VARCHAR2(12) not null,
    EMP_TYPE VARCHAR2(16),
    TEL      VARCHAR2(20),
    HOBBY    VARCHAR2(30),
    PAY      NUMBER,
    POSITION VARCHAR2(16),
    PEMPNO   NUMBER
)
/

INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19900101, '나사장', TO_DATE('1964-01-25', 'YYYY-MM-DD HH24:MI:SS'), '0001', '정규직', '054)223-0001', '음악감상', 100000000, '대표이사', null);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19960101, '전부장', TO_DATE('1973-03-22', 'YYYY-MM-DD HH24:MI:SS'), '1000', '정규직', '02)6255-8000', '독서', 72000000, '부장', 19900101);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19970201, '최일도', TO_DATE('1975-04-15', 'YYYY-MM-DD HH24:MI:SS'), '1000', '정규직', '02)6255-8005', '운동', 50000000, '과장', 19960101);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19930331, '백원만', TO_DATE('1976-05-25', 'YYYY-MM-DD HH24:MI:SS'), '1001', '정규직', '02)6255-8010', '자전거타기', 60000000, '차장', 19960101);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19950303, '천만득', TO_DATE('1973-06-15', 'YYYY-MM-DD HH24:MI:SS'), '1002', '정규직', '02)6255-8020', '마라톤', 56000000, '과장', 19960101);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19966102, '일지매', TO_DATE('1972-07-05', 'YYYY-MM-DD HH24:MI:SS'), '1003', '정규직', '052)223-4000', '음악감상', 75000000, '부장', 19900101);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19930402, '유관순', TO_DATE('1972-08-15', 'YYYY-MM-DD HH24:MI:SS'), '1004', '정규직', '042)998-7005', '등산', 51000000, '과장', 19966102);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19960303, '김문호', TO_DATE('1971-09-25', 'YYYY-MM-DD HH24:MI:SS'), '1005', '정규직', '031)564-3340', '등산', 35000000, '대리', 19966102);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19970112, '노정호', TO_DATE('1976-11-05', 'YYYY-MM-DD HH24:MI:SS'), '1006', '정규직', '054)223-4500', '수영', 68000000, '부장', 19900101);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (19960212, '이윤나', TO_DATE('1972-12-15', 'YYYY-MM-DD HH24:MI:SS'), '1007', '정규직', '054)223-4600', null, 49000000, '과장', 19970112);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000101, '이태백', TO_DATE('1985-01-25', 'YYYY-MM-DD HH24:MI:SS'), '1008', '계약직', '051)123-4567', '등산', 30000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000102, '김설악', TO_DATE('1983-03-22', 'YYYY-MM-DD HH24:MI:SS'), '1009', '계약직', '031)234-5678', '낚시', 30000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000203, '최오대', TO_DATE('1982-04-15', 'YYYY-MM-DD HH24:MI:SS'), '1010', '계약직', '02)2345-6789', '바둑', 30000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000334, '박지리', TO_DATE('1981-05-25', 'YYYY-MM-DD HH24:MI:SS'), '1011', '계약직', '053)456-7890', '노래', 30000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000305, '정북악', TO_DATE('1980-06-15', 'YYYY-MM-DD HH24:MI:SS'), '1008', '수습직', '051)567-8901', '독서', 22000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20006106, '유도봉', TO_DATE('1980-07-05', 'YYYY-MM-DD HH24:MI:SS'), '1009', '수습직', '031)678-9012', '술', 22000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000407, '윤주왕', TO_DATE('1980-08-15', 'YYYY-MM-DD HH24:MI:SS'), '1010', '수습직', '02)2789-0123', '오락', 22000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000308, '강월악', TO_DATE('1980-09-25', 'YYYY-MM-DD HH24:MI:SS'), '1011', '인턴직', '053)890-1234', '골프', 20000000, null, 19960212);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000119, '장금강', TO_DATE('1980-11-05', 'YYYY-MM-DD HH24:MI:SS'), '1004', '인턴직', '042)901-2345', '술', 20000000, null, 19930402);
INSERT INTO HR.EMP2 (EMPNO, NAME, BIRTHDAY, DEPTNO, EMP_TYPE, TEL, HOBBY, PAY, POSITION, PEMPNO) VALUES (20000210, '너한나', TO_DATE('1980-12-15', 'YYYY-MM-DD HH24:MI:SS'), '1005', '인턴직', '031)345-3456', '독서', 20000000, null, 19960303);