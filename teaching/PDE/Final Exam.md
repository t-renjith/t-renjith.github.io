---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/final-exam/
---

## Final Exam

1.  Consider the IVP $u_x^2+u_y^2=1$, $u(x,y)=0$ on the line $x+y=1$.

    1.  **[5 points]** Discuss the existence and uniqueness of the IVP.

    2.  **[5 points]** Solve the IVP

2.  **[5 points]** Consider the PDE $-\Delta u = \lambda u$ in $\Omega$, $u = 0$ on $\partial\Omega$ where $\lambda$ is a scalar and $\Omega$ is a bounded open set. If $\lambda \leq 0$, prove that $u \equiv 0$.

3.  **[5 points]** Suppose $u$ solves:
    $$
    \begin{align*}
        u_t - \Delta u & = u\text{ in } \Omega \times (0,T),      \\
        u(x,0)         & = 0 \text{ in }\Omega,                   \\
        u(x,t)         & =0\text{ on }\partial\Omega\times[0,T].
    \end{align*}
    $$
    Then show that $u(x,t) = 0$ in $\Omega \times (0,T)$.

4.  **[5 points]** Show that if $u$ satisfies the heat equation $u_t - \Delta u = 0$ in $\Omega \times (0,T)$, then the following maximum principle holds:
    $$
    \begin{equation*}
                  \sup\limits_{\Omega \times (0,T)} u(x,t) = \sup\limits_{\Gamma_T} u(x,t).
    \end{equation*}
    $$

5.  1.  **[5 points]** Prove the characteristic parallelogram property for one dimensional wave equations.

    2.  **[5 points]** Use characteristic parallelogram property to solve
        $$
        \begin{align*}
            & u_{tt} - u_{xx} = 0,\quad x>0,\quad t>0, \\
            & u(x,0) = f(x),\quad u_t(x,0) = g(x),     \\
            & u(0,t) = h(t).
        \end{align*}
        $$

6.  **[5 points]** Integrate the wave equation $u_{tt} - c^2u_{xx} = f(x,t)$ in the characteristic triangle $P(x,t)$, $Q(x-ct,0)$, $R(x+ct,0)$ to derive a formula for the solution.

7.  **[5 points]** Is there an $f$ in $L^1(\mathbb{R})$ such that $f * f = f$ and $f\neq 0$?

8.  **[5 points]** Find a smooth function $a : \mathbb{R}^2 \to \mathbb{R}$ such that, for the equation of the form
    $$
    a(x, y) \, u_x + u_y = 0,
    $$
    there does not exist any solution in the entire $\mathbb{R}^2$ for any nonconstant initial value prescribed on $\{ y = 0 \}$.
