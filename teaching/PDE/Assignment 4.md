---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/assignment-4/
---

## Assignment 4

1.  **[5 points]** **(Spherical Symmetry)** Let $R$ be a rotational matrix, that is $RR^t = I$, and $u$ be harmonic in $\mathbb{R}^n$. Define $v$ by $v(x) = u(Rx)$. Show that $v$ is harmonic in $\mathbb{R}^n$.

2.  **[5 points]** **(Schwarz reflection principle)** Let $\Omega$ be a domain in $\mathbb{R}^2$ symmetric about the $x$-axis and let $\Omega^+ = \{(x, y) : y > 0\}$ be the upper part. Assume $u \in C(\Omega^+)$ is harmonic in $\Omega^+$ with $u = 0$ on $\partial\Omega^+ \cap \{y = 0\}$. Define
    $$
    v(x, y) = \begin{cases}
                      u(x, y),   & y \geq 0, (x, y) \in \Omega, \\
                      -u(x, -y), & y < 0, (x, y) \in \Omega.
                  \end{cases}
    $$
    Show that $v$ is harmonic.

3.  **[5 points]** **(Harnack’s inequality)** Let $u \geq 0$ be harmonic in a domain $\Omega$. Let $V \subset\subset \Omega$ be connected, open and let $d = d(V, \partial\Omega)$ be the distance from $V$ to the boundary $\partial\Omega$. Use MVT in suitable open balls to prove that
    $$
    2^n u(y) \geq u(x) \geq 2^{-n} u(y)
    $$
    for all $x, y \in V$ satisfying $|x - y| \leq \frac{r}{4}$. Use this estimate to prove the following: There are constants $C_1, C_2 > 0$ depending on $V$ such that
    $$
    C_1 u(y) \geq u(x) \geq C_2 u(y)
    $$
    for all $x, y \in V$.

4.  **[5 points]** **(Harnack’s Convergence Theorem)** Let $u_n:\Omega\to\mathbb{R}$ be a monotonically increasing sequence of harmonic functions. If there exists $y\in\Omega$ for which the sequence $\{u_n(y)\}_{n\in\mathbb{N}}$ is bounded, then $u_n$ converges on any $\Omega'\subset\subset\Omega$ uniformly to a harmonic function.

5.  **[5 points]** **(Eigen Values)** Consider the PDE $-\Delta u = \lambda u$ in $\Omega$, $u = 0$ on $\partial\Omega$ where $\lambda$ is a scalar and $\Omega$ is a bounded open set. If $\lambda \leq 0$, prove that $u \equiv 0$ and there is no non-trivial solution.
