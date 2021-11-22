create table TEST_ENABLE
(
    NO   NUMBER       not null
        constraint TE_NO_PK
            primary key,
    NAME VARCHAR2(10) not null
        constraint TE_NAME_NN
            check ("NAME" IS NOT NULL)
)
/

