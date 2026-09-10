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

### 法国高等光学研究所访问学生，2026 年 7 月至 9 月

**导师：Antoine Browaeys 教授 · 法国巴黎-萨克雷**

**主要项目：光镊阵列的快速 SLM 重排**

- 开发并部署 CNN 与三次狄利克雷 WGS 重排流程，结合光阱匹配及位置、相位轨迹生成，并与 Fast WGS 比较帧间光强变化。
- 测量 SLM 衍射效率、温度相关响应时间和光强波动；同步 SLM 更新、AOM 门控与相机触发，通过频闪成像解析帧间动态。
- 实现相机反馈均匀化，以全流程光强分布、变异系数（CV）及单光阱光强变化评估重排质量。
- 采用 C++/CUDA 和异步传输，使计算与 SLM 显示重叠；三次狄利克雷方案在 30 次随机初态测试中，实现 **2,025 个光阱、22 帧序列的 38.7 ms 中位耗时**（从匹配开始至末帧写入确认）。

[暑研报告：Fast SLM Rearrangement]({{ base_path }}/talks/2026-09-10-fast-slm-rearrangement/)

**补充项目：热铷蒸气中的饱和吸收与光穿透**

- 分析 7 个温度下的功率依赖透射数据，以及 96、147、203 °C 下的空间荧光剖面，拟合温度相关的光穿透尺度。
- 推导均匀展宽与多普勒平均的吸收、传播模型，评估成像读出、拟合边界和探测下限带来的系统误差，并与平均场空间相分离理论作比较。

### 香港城市大学暑期研究，2025 年 7 月至 8 月

**量子光学，香港九龙**

- 研究自建光学系统中的 Rb 原子激光加热现象。
- 设计参考光路与实验光路。
- 搭建 AOM 光路及相关实验设备。
- 分析热原子气室中的多普勒展宽和谱线展宽行为。

## 精选课程成绩

- 数学物理方法（I）：100/100
- 量子信息：93/100
- 线性代数（B）：91/100
- 高级英语写作：91/100
- 电动力学（A）：90/100
- 热学：90/100
- 电磁学：89/100
- 计算概论（B）：88.5/100
- 近代物理实验 I：88/100
- 热力学与统计物理（A）：87/100
- 数据结构与算法（B）：85/100
- 量子力学讨论班：90/100
- 激光实验：93/100
- 材料物理：A+
- 几何光学与光学仪器：A
- 电子线路基础及实验（2）：89/100

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

### Visiting Student Researcher, Institut d'Optique, July to September 2026

**Advisor: Prof. Antoine Browaeys · Paris-Saclay, France**

**Main project: fast SLM rearrangement of optical-tweezer arrays**

- Developed and deployed CNN and three-iteration Dirichlet WGS workflows, incorporating trap matching and position/phase trajectories; compared frame-transition intensity dynamics against Fast WGS.
- Characterized SLM diffraction efficiency, temperature-dependent response times and intensity fluctuations; synchronized SLM updates, AOM gating and camera triggers for stroboscopic imaging of frame transitions.
- Implemented camera-feedback uniformization and evaluated full-sequence intensity distributions, coefficients of variation (CV) and individual-trap intensity traces.
- Used C++/CUDA and asynchronous transfers to overlap computation with SLM display. The three-iteration Dirichlet workflow achieved a **38.7 ms median for 2,025 traps across 22 frames**, from matching to final SLM write acknowledgement, over 30 random initial loads.

[Summer research presentation: Fast SLM Rearrangement]({{ base_path }}/talks/2026-09-10-fast-slm-rearrangement/)

**Additional project: saturation-assisted light penetration in hot rubidium vapor**

- Analyzed power-dependent transmission at seven temperatures and spatial fluorescence profiles at 96, 147 and 203 °C; fitted propagation models to quantify the temperature-dependent penetration scale.
- Derived homogeneous and Doppler-averaged absorption and propagation models, assessed systematic effects from imaging readout, fit boundaries and detector limits, and compared observations with mean-field spatial phase-separation predictions.

### Summer Research, City University of Hong Kong, July to August 2025

**Quantum optics, Kowloon, Hong Kong**

- Investigated laser heating of Rb atoms in a lab-built optical setup.
- Designed both reference and experimental optical paths.
- Built AOM optical paths and supporting experimental equipment.
- Analyzed Doppler and line-broadening behavior in thermal vapor cells.

## Selected Course Grades

- Methods of Mathematical Physics (I): 100/100
- Quantum Information: 93/100
- Linear Algebra (B): 91/100
- Advanced English Writing: 91/100
- Electrodynamics (A): 90/100
- Thermal Physics: 90/100
- Electromagnetism: 89/100
- Introduction to Computation (B): 88.5/100
- Modern Physics Laboratory I: 88/100
- Thermodynamics & Statistical Physics (A): 87/100
- Data Structures & Algorithms (B): 85/100
- Seminar for Quantum Mechanics: 90/100
- Laser Experiment: 93/100
- Materials Physics: A+
- Geometrical Optics and Optical Instruments: A
- Fundamentals of Electronic Circuits & Experiments (2): 89/100

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
