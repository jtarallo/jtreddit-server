import { MigrationInterface, QueryRunner } from "typeorm";

export class FakePosts1645392509169 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            insert into post (title, text, "posterId") values ('Kabhi Haan Kabhi Naa', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Loser Takes All! (Qui perd gagne !)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('How to Deal', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Wedding, A', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('2081', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Last Winter (L''hiver dernier)', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Already Dead', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Pinocchio', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Seven Days to Noon', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Day the Earth Stood Still, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Mahabharata, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('The Man Who Loved Yngve', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Madness of King George, The', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('We''re Not Married!', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Last Wedding, The (Kivenpyörittäjän kylä)', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Roxie Hart', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Melancholia', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Hip Hop Witch, Da', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Miss Annie Rooney', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Down to the Bone', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Kissing a Fool', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Enid Is Sleeping', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Dances with Wolves', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('My House in Umbria', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Possible Loves (Amores Possíveis)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Mark of the Vampire', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Coffy', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Plan 9 from Outer Space', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Road, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Chameleon (Kaméleon)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Kevin Hart: Let Me Explain', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('The 3 Rs', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('TPB AFK: The Pirate Bay Away from Keyboard', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Pursuit to Algiers', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Life and Times of Judge Roy Bean, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Countess from Hong Kong, A', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Keeping the Faith', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Once Upon a Honeymoon', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Fallen Angel', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Beast with Five Fingers, The', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Heartbreaker (L''Arnacoeur)', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Twin Peaks: Fire Walk with Me', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('View from the Top, A', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Window to Paris (Okno v Parizh)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Paul', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Higher and Higher', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('College', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Passchendaele', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Resolution', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Marilyn in Manhattan', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Hunk', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Three Musketeers, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('American Soldiers', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Devil and Max Devlin, The', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Once Upon a Scoundrel', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Thousand Clouds of Peace, A (Mil nubes de paz cercan el cielo, amor, jamás acabarás de ser amor)', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Itty Bitty Titty Committee', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Entertainer, The', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Fresh Guacamole', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Serious Moonlight', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Sixtynine', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Mummy''s Tomb, The', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('My Favorite Blonde', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Trial by Jury', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('29 Palms', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Book of Life, The', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Losing Chase', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Killer Meteors, The (Feng yu shuang liu xing)', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('White Darkness, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Elizabethtown', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Madagascar: Escape 2 Africa', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Teen Witch', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Ghosts of Mississippi', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Safety Not Guaranteed', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Star Chamber, The', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Net Worth', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Secret of Santa Vittoria, The', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Knights of Bloodsteel', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('21 tapaa pilata avioliitto', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Sleeping Beauty', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Anne of Green Gables: The Sequel (a.k.a. Anne of Avonlea)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Old Dogs', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('A Kind of America 2', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Blind Dating', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Chronicle of an Escape (Crónica de una fuga)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Grandma''s Boy', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Grumpier Old Men', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Shenandoah', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Our Little Differences (Die feinen Unterschiede)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Phantom', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('As Good as It Gets', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Lone Wolf and Cub: Baby Cart at the River Styx (Kozure Ôkami: Sanzu no kawa no ubaguruma)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('King of Marvin Gardens, The', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Feast of July', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Tie Xi Qu: West of the Tracks (Tiexi qu)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Snapper, The', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Outskirts (Okraina)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('City for Conquest', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Color of Pomegranates, The (Sayat Nova)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
insert into post (title, text, "posterId") values ('Sputnik', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 'a89785fd-ecdd-4995-81f6-2e74623de033');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM post`);
  }
}
