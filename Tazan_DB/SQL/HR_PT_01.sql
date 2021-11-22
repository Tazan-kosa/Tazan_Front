create table PT_01
(
    판매번호 VARCHAR2(8),
    제품번호 CHAR(4),
    수량   NUMBER,
    금액   NUMBER
)
/

INSERT INTO HR.PT_01 ("판매번호", "제품번호", "수량", "금액") VALUES ('12010101', '1000', 1, 500);
INSERT INTO HR.PT_01 ("판매번호", "제품번호", "수량", "금액") VALUES ('12010102', '1001', 1, 400);
INSERT INTO HR.PT_01 ("판매번호", "제품번호", "수량", "금액") VALUES ('12010103', '1003', 1, 300);