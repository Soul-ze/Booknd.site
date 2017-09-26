-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: testmysql
-- ------------------------------------------------------
-- Server version	5.7.19-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `BOOKID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ISBN` varchar(45) DEFAULT NULL,
  `TITLE` varchar(45) DEFAULT NULL,
  `AUTHORID` int(10) unsigned DEFAULT NULL,
  `COVERURL` varchar(100) DEFAULT NULL,
  `INTRO` varchar(1024) DEFAULT NULL,
  `PUBLISHER` varchar(45) DEFAULT NULL,
  `PUBLISHDATE` varchar(45) DEFAULT NULL,
  `PRICE` int(10) unsigned DEFAULT NULL,
  `DELETESTATE` int(1) unsigned DEFAULT '0',
  PRIMARY KEY (`BOOKID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'12-34-56-78','Hello!Mifans!',7,'https://i.loli.net/2017/09/25/59c8ff79bbcfe.jpg','这是一本有关米粉的书！\n真的！','6092出版社','1998/06/09',23,0),(2,'9787115454157','流畅的Python',16,'https://i.loli.net/2017/09/25/59c90134a15c3.jpg','本书致力于帮助Python开发人员挖掘这门语言及相关程序库的优秀特性，避免重复劳动，同时写出简洁、流畅、易读、易维护，并且具有地道Python风格的代码。本书尤其深入探讨了Python语言的高级用法，涵盖数据结构、Python风格的对象、并行与并发，以及元编程等不同的方面。','人民邮电出版社','2017-05-01',116,0),(3,'12-34-56-78','小米MIX2的工艺哲学',7,'https://i.loli.net/2017/09/25/59c90134a2db9.jpg','一个MIX2是怎么练成的！！！！','6092出版社','2017/09/23',23,0),(4,'9787111334989','软件工程',8,'https://i.loli.net/2017/09/25/59c901345e8ad.jpg','软件工程的八篇内容重构为四个部分，使教师讲授软件工程课程更加容易。每一章都有更新，增加了敏捷软件开发和嵌入式系统等新章，补充了模型驱动工程开源开发测试驱动开发可依赖系统体系结构静态分析和模型检查COTS复用服务作为软件以及敏捷规划等新内容。着重讨论了开发可靠的分布式系统的相关主题以及敏捷方法和软件复用。反映敏捷方法先进性的同时，不忘强调传统的计划驱动软件工程的作用，阐述了两者结合构建优秀软件系统的重要性.以一个新的病人记录系统案例研究贯穿始终，系统完整地讲解软件工程的各个方面。软件工程设计为印刷Web相结合的方式，核心信息采用印刷版本，教辅材料及先前版本中的一些章节放在Web上，为读者提供丰富翔实的信息。','机械工业出版社','2011/05/01',62,0),(5,'9787115460769','构建之法现代软件工程',9,'https://i.loli.net/2017/09/25/59c9013470f44.jpg','软件工程牵涉的范围很广， 同时也是一般院校的同学反映比较空洞乏味的课程。 但是软件工程的技术对于投身IT 产业的学生来说是非常重要的。作者邹欣有长达20年的一线软件开发经验，他利用业余时间在数所高校进行了长达6年的软件工程教学实践，总结出了在16周的时间内让同学们通过 做中学 Learning By Doin 掌握实用的软件工程技术的教学计划，并得到高校师生的积极反馈。在此基础上，作者对软件工程的各个知识点和技能要求进行了系统性整理，形成教材。 \n\n本书共分17章，对照美国ACM/IEEE2013年新出版的计算机科学教学指导Computer ScienceCurricula 2013中的软件工程相关部分，这本教材覆盖了其中大多数Core-Tier1和Core-Tier2的内容。可以说，全书对软件工程内容的覆盖不逊于任何一本现行的教材，同时讲述了业界最新实践方法。','人民邮电出版社','2017/06/01',58,0),(6,'9787115330246','Google 软件测试之道',10,'https://i.loli.net/2017/09/25/59c90134803b6.jpg','Google软件测试之道从内部视角告诉你这个世界上知名的互联网公司是如何应对21世纪软件测试的独特挑战的。Google软件测试之道抓住了Google做测试的本质，抓住了Google测试这个时代复杂软件的精华。\n\nGoogle软件测试之道描述了测试解决方案，揭示了测试架构是如何设计实现和运行的，介绍了软件测试工程师的角色讲解了技术测试人员应该具有的技术技能阐述了测试工程师在产品生命周期中的职责讲述了测试管理及在Google的测试历史或在主要产品上发挥了重要作用的工程师的访谈，这对那些试图建立类似Google的测试流程或团队的人受益很大。\n\n最后，Google软件测试之道还介绍了作者对于Google测试如何继续演进的见解Google乃至整个业界的测试方向的一些预言，相信很多读者都会感受到其中的洞察力，甚至感到震惊。本书可以作为任何从事软件测试人员到达目标的指南。\nGoogle软件测试之道适合开发人员测试人员测试管理人员使用，也适合大中专院校相关专业师生的学习用书，以及培训学校的教材。','人民邮电出版社','2013/10/01',50,0),(7,'9787121297335','Python Web开发实战',11,'https://i.loli.net/2017/09/25/59c901346a018.jpg','Python Web开发实战按照一个Web 产品从无到有,从简单变复杂,从基础到进阶的过程，多角度,全方位讲述了Python Web 开发。内容涉及Web 框架,测试,数据库,消息队列,服务化,持续集成等，把网站工程的全貌展现在读者的眼前，从其中可以了解Web 工程从开发到上线的完整流程。另外，作者对当前现在正在流行的技术或工具，如Flask,Celery,Jupyter,Supervisor,SaltStack,Pandas 等都有较为详细的阐述，可作为技术选型时的参考。 \n对于Web 开发者,使用Python 语言的运维工程师和运维开发工程师,想提高Python 技能的开发者,想了解Python Web 开发的其他开发者，Python Web开发实战都适合阅读。','电子工业出版社','2016-09-01',88,0),(8,'9787115431790','用Python写网络爬虫',12,'https://i.loli.net/2017/09/25/59c901348a6d8.jpg','《用Python写网络爬虫》讲解了如何使用Python来编写网络爬虫程序，内容包括网络爬虫简介，从页面中抓取数据的三种方法，提取缓存中的数据，使用多个线程和进程来进行并发抓取，如何抓取动态页面中的内容，与表单进行交互，处理页面中的验证码问题，以及使用Scarpy和Portia来进行数据抓取，使用本书介绍的数据抓取技术对几个真实的网站进行了抓取，旨在帮助读者活学活用书中介绍的技术。\n《用Python写网络爬虫》适合有一定Python编程经验，而且对爬虫技术感兴趣的读者阅读。\n作者简介','人民邮电出版社','2016-08-01',38,0),(9,'9787115431790','用Python进行数据分析',13,'https://i.loli.net/2017/09/25/59c9013489074.jpg','《用Python写网络爬虫》讲解了如何使用Python来编写网络爬虫程序，内容包括网络爬虫简介，从页面中抓取数据的三种方法，提取缓存中的数据，使用多个线程和进程来进行并发抓取，如何抓取动态页面中的内容，与表单进行交互，处理页面中的验证码问题，以及使用Scarpy和Portia来进行数据抓取，使用本书介绍的数据抓取技术对几个真实的网站进行了抓取，旨在帮助读者活学活用书中介绍的技术。\n《用Python写网络爬虫》适合有一定Python编程经验，而且对爬虫技术感兴趣的读者阅读。','人民邮电出版社','2016-08-01',73,0),(10,'9787121317989','深入理解ES6',14,'https://i.loli.net/2017/09/25/59c90134a48d4.jpg','ES6是ECMAScript标准十余年来变动大的一个版本，其中添加了许多新的语法特性，既有大家耳熟能详的Promise，也有闻所未闻的Proxy代理和Reflection反射，既有可以通过转译器Transpiler等方式在旧版本浏览器中实现兼容的let、const、不定参数、展开运算符等功能，亦有无论如何都无法实现向前兼容的尾调用优化。\n深入理解ES6的特性对于所有JavaScript开发者而言至关重要，在可预见的未来，ES6中引入的语言特性会成为JavaScript应用程序的主流特性，这也是《深入理解ES6》的初衷。\n希望你通过阅读《深入理解ES6》可以了解ES6的新特性，并在需要时能够随时使用。\n','电子工业出版社','2017-07-01',83,0),(11,'9787115452368','前端架构设计',17,'https://i.loli.net/2017/09/25/59c90fdb7675f.jpg','本书展示了一名成熟的前端架构师对前端开发全面而深刻的理解。作者结合自己在Red Hat公司的项目实战经历，探讨了前端架构原则和前端架构的核心内容，包括工作流程、测试流程和文档记录，以及作为前端架构师所要承担的具体开发工作，包括HTML、JavaScript和CSS等。','人民邮电出版社','2017-04-01',41,0);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-26 14:33:40
