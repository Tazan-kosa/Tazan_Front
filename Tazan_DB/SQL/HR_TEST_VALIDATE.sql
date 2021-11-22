create table TEST_VALIDATE
(
    NO   NUMBER       not null
        constraint TV_NO_PK
            primary key,
    NAME VARCHAR2(10) not null
        constraint TV_NAME_NN
            check ("NAME" IS NOT NULL)
)
/

INSERT INTO HR.TEST_VALIDATE (NO, NAME) VALUES (1, 'AAA');
INSERT INTO HR.TEST_VALIDATE (NO, NAME) VALUES (2, 'BBB');
INSERT INTO HR.TEST_VALIDATE (NO, NAME) VALUES (3, 'CCC');