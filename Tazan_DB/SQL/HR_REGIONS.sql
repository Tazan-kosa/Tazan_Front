create table REGIONS
(
    REGION_ID   NUMBER not null
        constraint REG_ID_PK
            primary key
        constraint REGION_ID_NN
            check ("REGION_ID" IS NOT NULL),
    REGION_NAME VARCHAR2(25)
)
/

INSERT INTO HR.REGIONS (REGION_ID, REGION_NAME) VALUES (1, 'Europe');
INSERT INTO HR.REGIONS (REGION_ID, REGION_NAME) VALUES (2, 'Americas');
INSERT INTO HR.REGIONS (REGION_ID, REGION_NAME) VALUES (3, 'Asia');
INSERT INTO HR.REGIONS (REGION_ID, REGION_NAME) VALUES (4, 'Middle East and Africa');