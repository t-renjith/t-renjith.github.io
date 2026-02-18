---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/midterm/
---

## Midterm

1.  **[2 points]** Reduce to canonical form :
    $u_{xx}-2u_{xy}-3u_{yy}+u_y=0$.

2.  Evaluate the integrals:
    1.  **[1 point]**
        $\displaystyle \int_\Omega\frac{2x_1}{1+|x|^2}~dx$, where
        $\Omega=\{x\in \mathbb{R}^3:|x_1|+|x_2|+|x_3|\leq 1\}$

    2.  **[1 point]**
        $\displaystyle \int_{B(\alpha,1)}\frac{\partial u}{\partial x_1}dx$,
        where $u=|x|^{-1}$ in $\mathbb{R}^3$ and $\alpha=(2,0,0)$.

3.  Consider the PDE $xu_x+yu_y+zu_z=3u$ in $\mathbb{R}^3$.
    1.  **[3 points]** Solve the PDE with initial condition
        $u(x,y,1)=x^2+y^2$.

    2.  **[1 point]** Is it possible to find unique solution if the
        initial condition is prescribed on the surface $z=1+x^2+y^2$ ?

4.  Consider the following IVPs:
    - **A:** $u=u_x^2-3u_y^2,\ u(x,0)=x^2,\ x>0$.

    - **B:** $u=u_xu_y,\ u(x,0)=x^2,\ x>0$.
    1.  **[4 points]** Discuss the existence and uniqueness of both
        IVPs.

    2.  **[3 points]** Solve any one the above.

5.  **[3 points]** Let $\Omega$ be an open, bounded set in
    $\mathbb{R}^n$. Suppose $u \in C^2(\Omega) \cap C(\bar{\Omega})$
    satisfies $\Delta u = -1$ in $\Omega$, $u = 0$ on $\partial\Omega$.
    Show that for $x \in \Omega$,
    $u(x) \geq \frac{1}{2n}(d(x, \partial\Omega))^2$.

    (Hint: For fixed $x_0 \in \Omega$, consider the function
    $u(x) + \frac{1}{2n}|x - x_0|^2$, $x \in \Omega$.)

6.  **[3 points]** Suppose $u$ is a harmonic function in
    $\mathbb{R}^n$ satisfying $|u(x)| \leq C(1 + |x|^m)$, for some
    non-negative integer $m$ and for all $x \in \mathbb{R}^n$. Show that
    $u$ is a polynomial of degree at most $m$.

7.  **[3 points]** Let $\Omega$ is a bounded, open subset of
    $\mathbb{R}^n$, and $u\in C^1(\Omega)$. If
    $\int_{\partial B}\frac{\partial u}{\partial \nu}dS=0$ for every
    ball $B$ with $\bar{B}\subset\Omega$, show that $u$ is harmonic in
    $\Omega$.

8.  Consider the PDE $xu_x+yu_y=2u$ on $\mathbb{R}^2$.
    1.  **[3 points]** Solve the PDE with the initial condition
        $u(x,1)=x$. Determine whether the solution is globally unique?
        If it is not, find ans alternative solution on $\mathbb{R}^2$.

    2.  **[3 points]** Find two solutions to the PDE with the initial
        condition $u(x,e^x)=xe^x$, ensuring that these solutions do not
        coincide in any neighborhood of the initial curve.
