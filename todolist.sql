/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : todolist

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2017-09-06 22:32:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for todo
-- ----------------------------
DROP TABLE IF EXISTS `todo`;
CREATE TABLE `todo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `reng` datetime DEFAULT NULL,
  `done` int(1) DEFAULT '0' COMMENT '0 no',
  `unactive` int(1) DEFAULT '0' COMMENT '0 no',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of todo
-- ----------------------------
INSERT INTO `todo` VALUES ('1', 'Phỏng vấn TMA', '2017-09-05 15:26:00', '0', '0');
INSERT INTO `todo` VALUES ('2', 'Phỏng vấn Fujinet', '2017-09-06 15:26:44', '0', '0');
INSERT INTO `todo` VALUES ('3', 'Phỏng vấn Poeta', '2017-09-08 19:57:45', '0', '0');
INSERT INTO `todo` VALUES ('4', 'Phỏng vấn TopCV', '2017-09-08 19:25:14', '0', '0');
INSERT INTO `todo` VALUES ('5', 'Phỏng vấn GameLoft', '2017-09-30 20:00:28', '0', '0');
