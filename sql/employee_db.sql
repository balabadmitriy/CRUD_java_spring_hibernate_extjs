--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.7
-- Dumped by pg_dump version 9.5.7

-- Started on 2017-08-07 10:14:23 EEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE employee_db;
--
-- TOC entry 3110 (class 1262 OID 17028)
-- Name: employee_db; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE employee_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'ru_RU.utf8' LC_CTYPE = 'ru_RU.utf8';


ALTER DATABASE employee_db OWNER TO postgres;

\connect employee_db

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 13338)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 3113 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 182 (class 1259 OID 17031)
-- Name: department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE department (
    id bigint NOT NULL,
    department_name character varying(255)
);


ALTER TABLE department OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 17029)
-- Name: department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE department_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE department_id_seq OWNER TO postgres;

--
-- TOC entry 3114 (class 0 OID 0)
-- Dependencies: 181
-- Name: department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE department_id_seq OWNED BY department.id;


--
-- TOC entry 184 (class 1259 OID 17039)
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE employees (
    id bigint NOT NULL,
    first_name character varying(255),
    last_name character varying(255),
    "position" character varying(255),
    department bigint
);


ALTER TABLE employees OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 17037)
-- Name: employees_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE employees_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE employees_id_seq OWNER TO postgres;

--
-- TOC entry 3115 (class 0 OID 0)
-- Dependencies: 183
-- Name: employees_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE employees_id_seq OWNED BY employees.id;


--
-- TOC entry 186 (class 1259 OID 17050)
-- Name: hierarchy_of_department; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE hierarchy_of_department (
    id bigint NOT NULL,
    parent_id bigint
);


ALTER TABLE hierarchy_of_department OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 17048)
-- Name: hierarchy_of_department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE hierarchy_of_department_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hierarchy_of_department_id_seq OWNER TO postgres;

--
-- TOC entry 3116 (class 0 OID 0)
-- Dependencies: 185
-- Name: hierarchy_of_department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE hierarchy_of_department_id_seq OWNED BY hierarchy_of_department.id;


--
-- TOC entry 2975 (class 2604 OID 17034)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY department ALTER COLUMN id SET DEFAULT nextval('department_id_seq'::regclass);


--
-- TOC entry 2976 (class 2604 OID 17042)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employees ALTER COLUMN id SET DEFAULT nextval('employees_id_seq'::regclass);


--
-- TOC entry 2977 (class 2604 OID 17053)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hierarchy_of_department ALTER COLUMN id SET DEFAULT nextval('hierarchy_of_department_id_seq'::regclass);


--
-- TOC entry 3101 (class 0 OID 17031)
-- Dependencies: 182
-- Data for Name: department; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO department (id, department_name) VALUES (1, 'Отдел гавного инженера');
INSERT INTO department (id, department_name) VALUES (2, 'Отдел главного экономиста');
INSERT INTO department (id, department_name) VALUES (3, 'Отдел начальник производства');
INSERT INTO department (id, department_name) VALUES (4, 'Отдел технической информации');
INSERT INTO department (id, department_name) VALUES (5, 'Отдел технологической подготовки');
INSERT INTO department (id, department_name) VALUES (6, 'Ремонтный цех');
INSERT INTO department (id, department_name) VALUES (7, 'Отдел зароботной платы');
INSERT INTO department (id, department_name) VALUES (8, 'Производственный отдел');
INSERT INTO department (id, department_name) VALUES (9, 'Основные цеха');


--
-- TOC entry 3117 (class 0 OID 0)
-- Dependencies: 181
-- Name: department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('department_id_seq', 1, false);


--
-- TOC entry 3103 (class 0 OID 17039)
-- Dependencies: 184
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (2, 'Иванов', 'Сергей', 'Ведущий инженер', 1);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (1, 'Смирнов', 'Иван', 'Руководитель проекта', 1);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (3, 'Кузнецов', 'Степан', 'Инженер 1-к', 3);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (4, 'Попов', 'Петр', 'Инженер 2-к', 4);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (5, 'Цветков', 'Алексей', 'Инженер 3-к', 6);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (6, 'Жуков', 'Ярослав', 'Инженер 1-к', 5);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (7, 'Данилов', 'Данил', 'Инженер 2-к', 3);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (9, 'Дмитриев', 'Дмитрий', 'Инженер 1-к', 3);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (11, 'Максимов', 'Максим', 'Инженер 3-к', 9);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (12, 'Лапина', 'Виктория', 'Главный экономист', 2);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (13, 'Богданов', 'Виктор', 'Экономист', 2);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (14, 'Матвеева', 'Елена', 'Экономист', 7);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (15, 'Анотонова', 'Светлана', 'Экономист', 7);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (16, 'Белоусова', 'Леся', 'Экономист', 7);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (17, 'Зуев', 'Евгений', 'Инженер ', 8);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (18, 'Суворов', 'Леонид', 'Инженер', 8);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (19, 'Ильин', 'Илья', 'Инженер', 9);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (20, 'Третяков', 'Алексей', 'Инженер', 9);
INSERT INTO employees (id, first_name, last_name, "position", department) VALUES (10, 'Бобров', 'Федорвыавыавы', 'Инженер 2-к', 8);


--
-- TOC entry 3118 (class 0 OID 0)
-- Dependencies: 183
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('employees_id_seq', 20, true);


--
-- TOC entry 3105 (class 0 OID 17050)
-- Dependencies: 186
-- Data for Name: hierarchy_of_department; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO hierarchy_of_department (id, parent_id) VALUES (1, NULL);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (2, NULL);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (3, NULL);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (4, 1);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (5, 1);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (6, 4);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (7, 2);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (8, 3);
INSERT INTO hierarchy_of_department (id, parent_id) VALUES (9, 8);


--
-- TOC entry 3119 (class 0 OID 0)
-- Dependencies: 185
-- Name: hierarchy_of_department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('hierarchy_of_department_id_seq', 1, false);


--
-- TOC entry 2979 (class 2606 OID 17036)
-- Name: department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY department
    ADD CONSTRAINT department_pkey PRIMARY KEY (id);


--
-- TOC entry 2981 (class 2606 OID 17047)
-- Name: employees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (id);


--
-- TOC entry 2983 (class 2606 OID 17055)
-- Name: hierarchy_of_department_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hierarchy_of_department
    ADD CONSTRAINT hierarchy_of_department_pkey PRIMARY KEY (id);


--
-- TOC entry 2984 (class 2606 OID 17056)
-- Name: fk8pxugih7ryltmpf177f72ef9m; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY employees
    ADD CONSTRAINT fk8pxugih7ryltmpf177f72ef9m FOREIGN KEY (department) REFERENCES department(id);


--
-- TOC entry 2985 (class 2606 OID 17061)
-- Name: fkd6559e741in2mjex5e1v6wo4c; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY hierarchy_of_department
    ADD CONSTRAINT fkd6559e741in2mjex5e1v6wo4c FOREIGN KEY (parent_id) REFERENCES department(id);


--
-- TOC entry 3112 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-08-07 10:14:23 EEST

--
-- PostgreSQL database dump complete
--

