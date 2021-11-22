create table PT_02
(
    판매번호 VARCHAR2(8),
    제품번호 CHAR(4),
    수량   NUMBER,
    금액   NUMBER
)
/

INSERT INTO HR.PT_02 ("판매번호", "제품번호", "수량", "금액") VALUES ('12010201', '1004', 1, 600);
INSERT INTO HR.PT_02 ("판매번호", "제품번호", "수량", "금액") VALUES ('12010202', '1000', 1, 500);
INSERT INTO HR.PT_02 ("판매번호", "제품번호", "수량", "금액") VALUES ('12010203', '1005', 1, 700);