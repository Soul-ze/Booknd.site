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
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `authors` (
  `AUTHORID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar(45) DEFAULT NULL,
  `AGE` int(10) unsigned DEFAULT NULL,
  `COUNTRY` varchar(45) DEFAULT NULL,
  `PHOTO` varchar(100) DEFAULT NULL,
  `INTRO` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`AUTHORID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'MrSecret',21,'China Harbin','https://i.loli.net/2017/09/25/59c9035bd9f7b.jpg','还不到初级的攻城狮*1'),(7,'雷军',30,'武汉','https://i.loli.net/2017/09/25/59c90254490e8.jpg','Are you ok?!'),(8,'Ian Sommerville',66,'British','https://i.loli.net/2017/09/25/59c902545157e.jpg','英国著名软件工程专家。曾任教于兰卡斯特大学，现为圣安德鲁斯大学软件工程学教授。他在软件工程的教学和科研方面有20多年的经验。\n他是IEEECS组织编撰软件工程知识体系SWEBOK的专家委员会成员之一。他的研究领域包括计算机系统工程需求工程系统可靠性以及软件进货。'),(9,'邹欣',30,'中国','https://i.loli.net/2017/09/25/59c902542e2c0.jpg','邹欣现任微软Windows中国工程团队首席研发总监\n1996-2003年，邹欣在微软Outlook团队从事开发工作，2003-2005年，他在微软内部质量 工具团队和Visual Studio团队负责软件项目管理工具的开发。2005-2012年，他担任微软亚洲研究院技术创新组研发主管，负责研究成果的产品化和创新项目。2012-2014年，他担任微软亚洲互联网工程院首席研发总监，负责必应搜索客户端必应输入法必应词典等产品。加入微软前，邹欣从事过商用Unix系统GPS/GIS软件开发及测试工作。 \n他在2007年出版了移山之道，于2008年出版了编程之美合作。他于1991年获北京大学计算机软件专业学士学位。1996年获美国美国韦恩州立大学Wayne State University计算机软件专业硕士学位。 \n\n微博 weibo.com/sdxinz \n博客 www.cnblogs.com/xinz \n专栏 zhuanlan.zhihu.com/goujianzhifa'),(10,'James A Whittaker',52,'美国 大西雅图地区','https://i.loli.net/2017/09/25/59c902541ee45.jpg','惠特克JamesWhittaker，Google的工程总监，负责Google部分产品的测试，包括Chrome地图GoogleWebApp。在加盟Google之前，James在Microsoft工作，再之前是一名大学教授。James在全球测试领域闻名遐迩。\n\n阿尔邦JasonArbon，Google的一名测试工程师TE，曾参与负责Google桌面Chrome和ChromeOS的测试。同时，Jason也是一系列开源测试工具和个性化实验的开发负责人。在加入Google之前，他在Microsoft工作。\n\n卡罗洛JeffCarollo，Google的一名测试开发工程师SET，曾参与负责GoogleVoice工具ChromeChromeOS产品的测试。Jeff为许多Google内部的开发团队提供咨询服务，帮助提升这些团队初期的代码质量。在2010年，Jeff转岗为软件开发工程师SE，并领导负责Google+API的开发。在加入Google之前，Jeff在Microsoft工作。'),(11,'董伟明',30,'China','https://i.loli.net/2017/09/25/59c902547f656.png','董伟明，豆瓣高级产品开发工程师，主要负责豆瓣读书电音乐东西等产品线。从2011年开始接触Python, 从运维运维开发到现在的Web开发，积累了丰富的运维和开发经验，作者积极参与开源项目，给IPythonpip及Python标准库等贡献过代码。这本书将作者这些年使用Python进行Web开发，对各方面知识的理解和积累的经验进行梳理和总结。\n\n作者个人博客是 www.dongwm.com\nGithub地址为 github.com/dongweiming'),(12,'Richard Lawson',71,'澳大利亚','https://i.loli.net/2017/09/25/59c902545157e.jpg','Richard Lawson来自澳大利亚，毕业于墨尔本大学计算机科学专业。毕业后，他创办了一家专注于网络爬虫的公司，为超过50个国家的业务提供远程工作。他精通于世界语，可以使用汉语和韩语对话，并且积极投身于开源软件。他目前在牛津大学攻读研究生学位，并利用业余时间研发自主无人机。'),(13,'Wes McKinney',32,'San Francisco','https://i.loli.net/2017/09/25/59c9025583a71.png','Wes McKinney，资深数据分析专家，对各种Python库包括NumPypandasmatplotlib以及IPython等等都有深入研究，并在大量的实践中积累了丰富的经验。撰写了大量与Python数据分析相关的经典文章，被各大技术社区争相转载。开发了用于数据分析的著名开源Python库pandas，广获用户好评。在创建Lambda Foundry家致力于企业数据分析的公司之前，他曾是AQR Capital Management的定量分析师。'),(14,'Nicholas C Zakas',39,'美国 旧金山湾区','https://i.loli.net/2017/09/25/59c9025449ccd.jpg','Nicholas C. Zakas自2000年以来一直致力于Web应用程序的开发，重点关注前端开发，并以写作和讲述前沿佳实践而闻名。他曾于雅虎主页任职5年有余，他也是多本书的作者，其中包括The Principles of Object-Oriented JavaScript No Starch Press出版社和Professional JavaScript for Web Developers Wrox出版社。\n\n关于技术评审\nJuriy Zaytsev 在网上以kangax著称是纽约的一位前端网站开发人员。自2007年以来，他一直在探索JavaScript的怪异特性并撰写相关文章。Juriy为多个开源项目做出过贡献，其中包括Prototype.js和其他的热门项目，如他自己的Fabric.js。他是按需定制打印服务printio.ru的共同创始人，目前任职于Facebook。'),(16,'Luciano Ramalho',40,'巴西 圣保罗地区','https://i.loli.net/2017/09/25/59c90d560c58e.jpg','Luciano Ramalho，从1998年起就成为了Python程序员。他是Python软件基金会的成员，Python.pro.br（巴西的一家培训公司）的共同所有者，还是巴西众创空间Garoa Hacker Clube的联合创始人。他领导过多个软件开发团队，还在巴西的媒体、银行和政府部门教授Python课程。\n\n安道，专注于现代计算机技术的自由翻译，译有《Flask Web 开发》《Python 网络编程攻略》《Ruby on Rails 教程》等书。\n\n吴珂，现为Airbnb公司软件工程师，所在团队主要负责开发和维护各类可伸缩、高性能服务，并在Airbnb内推广面向服务的系统架构。在分布式系统、云存储服务和跨平台SDK开发，以及大规模数据处理等方面有多年经验。'),(17,'Micah Godbolt',30,'波特兰','https://i.loli.net/2017/09/25/59c910a6a7718.jpg','Micah Godbolt，前端架构师，作家，播客播主，世界开源大会的培训师和演讲师。他在个人博客 (micahgodbolt.com) 中经常大力推广前端架构、Sass、视觉还原测试和基于模式的设计方法。\n他出生于太平洋西北地区，目前和妻子以及两个孩子定居于波特兰的郊区。 ');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-26 14:33:41
