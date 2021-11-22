create table DML_ERR_TEST
(
    NO   NUMBER not null
        primary key,
    NAME VARCHAR2(10)
)
/

INSERT INTO HR.DML_ERR_TEST (NO, NAME) VALUES (1, 'AAA');
INSERT INTO HR.DML_ERR_TEST (NO, NAME) VALUES (2, 'BBB');