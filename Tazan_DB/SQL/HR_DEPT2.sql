create table DEPT2
(
    DCODE VARCHAR2(6)  not null
        primary key,
    DNAME VARCHAR2(20) not null,
    PDEPT VARCHAR2(6),
    AREA  VARCHAR2(16)
)
/

INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('0001', '사장실', null, '포항본사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1000', '경영지원부', '0001', '서울지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1001', '재무관리팀', '1000', '서울지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1002', '총무팀', '1000', '서울지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1003', '기술부', '0001', '포항본사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1004', 'H/W지원', '1003', '대전지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1005', 'S/W지원', '1003', '경기지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1006', '영업부', '0001', '포항본사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1007', '영업기획팀', '1006', '포항본사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1008', '영업1팀', '1007', '부산지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1009', '영업2팀', '1007', '경기지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1010', '영업3팀', '1007', '서울지사');
INSERT INTO HR.DEPT2 (DCODE, DNAME, PDEPT, AREA) VALUES ('1011', '영업4팀', '1007', '울산지사');