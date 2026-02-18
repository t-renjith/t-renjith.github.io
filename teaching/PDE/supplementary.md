---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/supplementary/
---

## Supplementary Exam

1.  Consider the IVP $u_y=u_x^3$, $u(x,0)=2x^\frac{3}{2}$.
    1.  **[5 points]** Discuss the existence and uniqueness of the IVP.

    2.  **[5 points]** Solve the IVP.

2.  **[10 points]** Let $\Omega$ be a domain in $\mathbb{R}^2$ symmetric about the $x$-axis and let $\Omega^+ = \{(x, y) : y > 0\}$ be the upper part. Assume $u \in C(\overline{\Omega^+})$ is harmonic in $\Omega^+$ with $u = 0$ on $\partial\Omega^+ \cap \{y = 0\}$. Define

    $$
    v(x, y) = \begin{cases}
                      u(x, y),   & y \geq 0, (x, y) \in \Omega, \\
                      -u(x, -y), & y < 0, (x, y) \in \Omega.
                  \end{cases}
    $$

    Show that $v$ is harmonic.

3.  Let $\phi$ be fundamental solution of heat equation given by:

    $$
    \begin{equation*}
    \phi(x,t) = \begin{cases}
        \frac{1}{(4\pi t)^{n/2}} e^{-\frac{|x|^2}{4t}}, & x \in \mathbb{R}^n, t > 0,  \\
        0,                                              & x \in \mathbb{R}^n, t = 0.
    \end{cases}
    \end{equation*}
    $$
    1.  **[5 points]** Show that
        $$\lim\limits_{(x,t)\to(x_0,0)} \phi(x,t) = 0, \quad \text{for } x_0 \neq 0.$$

    2.  **[5 points]** Show that
        $$\int_{\mathbb{R}^n} \phi(x,t)dx = 1 \quad \forall t > 0.$$

4.  **[10 points]** Solve

    $$
    \begin{align*}
        & u_{tt} - u_{xx} = 0,\quad x>0,\quad t>0, \\
        & u(x,0) = f(x),\quad u_t(x,0) = g(x),     \\
        & u_x(0,t) = h(t).
    \end{align*}
    $$

5.  **[10 points]** Consider the wave equation:
    $$u_{tt} - \Delta u = 0, \quad \text{in } \mathbb{R}^n \times (0,\infty),$$
    with initial data:
    $$u(x,0) = \phi(x), \quad u_t(x,0) = \psi(x).$$
    Verify that the solution is given by:
    $$u(x,t) = u_{\phi}(x,t) + \int_0^t u_{\psi}(x,s)ds,$$
    and also by:
    $$u(x,t) = v_{\psi}(x,t) + \frac{\partial}{\partial t} v_{\phi}(x,t).$$
