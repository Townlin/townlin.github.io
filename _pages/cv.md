---
layout: archive
title: "个人简历"
title_zh: "个人简历"
title_en: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<div class="lang-block lang-zh" markdown="1">

# 高健硕

北京大学物理学院本科生

## 关于我

我是北京大学物理学院 2023 级本科生，研究兴趣包括量子计算、量子信息和原子分子物理。我的目标是继续参与研究项目，并争取研究生阶段的国际学术机会。

## 教育经历

- **本科，物理学，预计 2027 年毕业** - 北京大学物理学院
- **高中，2023 年毕业** - 河南省安阳市第一中学
- **初中，2020 年毕业** - 河南省安阳市第八中学
- **小学，2014 年毕业** - 河南省安阳市三官庙小学

## 研究经历

### 香港城市大学暑期研究，2025 年 7 月至 8 月

**量子光学，香港九龙**

- 研究自建光学系统中的 Rb 原子激光加热现象。
- 设计参考光路与实验光路。
- 搭建 AOM 光路及相关实验设备。
- 分析热原子气室中的多普勒展宽和谱线展宽行为。

## 课程作业和研究兴趣

- 量子计算
- 量子信息
- 原子分子物理

## 获奖情况

- **2022 年物理竞赛一等奖**
  - 在学校教练资源有限的情况下自学，并取得校内第一。

## 编程能力

- C++
- Python
- LaTeX
- Mathematica
- Java

## 社会实践和活动参与

- **2024 年**：为高中生做志愿讲座。
- **2024 年**：参加北京大学运动会，获得 4 x 400 米接力银牌和 400 米铜牌。

## 兴趣爱好

- 滑板
- 日常跑步
- 周末徒步
- 小提琴

## 出版物

<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

## 讨论和展示

<ul>
{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}
</ul>

## 联系方式

- **姓名：** 高健硕
- **地址：** 北京，中国
- **电话：** +86 185 1189 3566
- **个人主页：** <https://townlin.github.io>
- **GitHub：** <https://github.com/Townlin>

</div>

<div class="lang-block lang-en" markdown="1">

# Jianshuo Gao

Physics undergraduate, Peking University

## About Me

I am a 2023 undergraduate student in the School of Physics at Peking University. My interests include quantum computation, quantum information, and atomic, molecular, and optical physics. I am looking for continued research experience and graduate-level international academic opportunities.

## Education

- **B.Sc. in Physics, expected 2027** - School of Physics, Peking University
- **Senior High School, 2023** - No. 1 High School of Anyang, Henan, China
- **Junior High School, 2020** - No. 8 High School of Anyang, Henan, China
- **Primary School, 2014** - Sanguanmiao Primary School, Anyang, Henan, China

## Research Experience

### Summer Research, City University of Hong Kong, July to August 2025

**Quantum optics, Kowloon, Hong Kong**

- Investigated laser heating of Rb atoms in a lab-built optical setup.
- Designed both reference and experimental optical paths.
- Built AOM optical paths and supporting experimental equipment.
- Analyzed Doppler and line-broadening behavior in thermal vapor cells.

## Coursework and Academic Interests

- Quantum computation
- Quantum information
- Atomic, molecular, and optical physics

## Awards

- **Physics Olympiad, First Prize, 2022**
  - Self-studied with limited school coaching and ranked first in school.

## Programming

- C++
- Python
- LaTeX
- Mathematica
- Java

## Social Practice and Activities

- **2024**: Volunteer lecture for high-school students.
- **2024**: Peking University Sports Meet, silver medal in the 4 x 400 m relay and bronze medal in the 400 m sprint.

## Interests

- Skateboarding
- Daily running
- Weekend hiking
- Violin

## Publications

<ul>
{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}
</ul>

## Talks

<ul>
{% for post in site.talks reversed %}
  {% include archive-single-talk-cv.html  %}
{% endfor %}
</ul>

## Contact

- **Name:** Jianshuo Gao
- **Location:** Beijing, China
- **Phone:** +86 185 1189 3566
- **Website:** <https://townlin.github.io>
- **GitHub:** <https://github.com/Townlin>

</div>
