
use shopping_jpa;

insert into account (deleted,username, password)
values
(0,"hieu","$2a$10$kumXdI7LpK.1yTmmixTOq.YMDyEPg3P.UKdFEpK42MF88zQmXY0h."),
(0,"hai","$2a$10$kumXdI7LpK.1yTmmixTOq.YMDyEPg3P.UKdFEpK42MF88zQmXY0h."),
(0,"hang","$2a$10$kumXdI7LpK.1yTmmixTOq.YMDyEPg3P.UKdFEpK42MF88zQmXY0h."),
(0,"hien","$2a$10$kumXdI7LpK.1yTmmixTOq.YMDyEPg3P.UKdFEpK42MF88zQmXY0h.");

insert into user (name, birthday, address, email, account_id,deleted,avatar)
values
("Nguyễn Văn Hiếu","1999-10-17","Đà Nẵng", "hieufix1710@gmail.com",1,0,"https://www.w3schools.com/howto/img_avatar.png");
insert into type_product (name)
value
('Digital Graphics'),
('Illustrantion'),
('Web Design'),
('Stock Photograpghy'),
('Code And Plugins');

insert into role (name)
values
('user'),
('admin');

insert into role_account(account_id,role_id)
values
(1,2),
(2,1),
(3,1),
(4,1);
insert into staff (name, birthday, address, email, account_id,deleted)
values
("Nguyễn Văn Hiếu","1999-10-17","Đà Nẵng", "hieufix1710@gmail.com",1,0);
insert into card (id)
value
(1);




insert into product (deleted,description,name,price,quantity,sale_off,trade_mark,url,type_product_id,user_id,view,followed,download_amount
,comment_amount)
value
(0,"admin","Paint",20,1,20,1,
"https://product.hstatic.net/1000234467/product/71qk2m1cigl._ac_sl1500__5424d566535e466481da5eaeca101c77_master.jpg",1,1,1,1,3,3),
(0,"admin","Hoodie",30,1,20,1,
"https://www.phukiensamsung.com/Uploads/do-dien-thoai-game-handle-18051610324988188.jpg",1,1,1,1,3,3),
(0,"admin","Hoodie",40,1,20,1,
"https://cdn.concung.com/32257-35914-large_mobile/do-choi-mo-hinh-lap-rap-mini-tobot-x.jpg",1,1,1,1,3,3),
(0,"admin","Lens",50,1,20,1,
"https://myricky.com/wp-content/uploads/2020/06/hxdxge4DKNH2w6IRVyaV_simg_d0daf0_800x1200_max-300x300.jpg",4,1,1,1,3,3),
(0,"admin","Hoodie",60,1,20,1,
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAjiSSIMHwIvPAPaldg11ZseH8VtfO6pLgw&usqp=CAU",1,1,1,1,3,3);








