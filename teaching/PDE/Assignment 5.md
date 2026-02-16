---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/assignment-5/
---

## Assignment 5

1.  **[5 points]** Use Fourier transform to derive the Poisson formula for the upper half plane in 2-dimension.

2.  Fundamental Solution

    1.  **[5 points]** Define the fundamental solution:
        $$
        \begin{equation*}
                                \phi(x,t) = \begin{cases} 
                                    \frac{1}{(4\pi t)^{n/2}} e^{-\frac{|x|^2}{4t}}, & x \in \mathbb{R}^n, t > 0,  \\
                                    0,                                              & x \in \mathbb{R}^n, t = 0.
                                \end{cases}
        \end{equation*}
        $$
        Show that $\phi$ satisfies $\phi_t - \Delta \phi = 0$ for $x \in \mathbb{R}^n, t > 0$ and that
        $$
        \begin{equation*}
                                \lim\limits_{(x,t)\to(x_0,0)} \phi(x,t) = 0, \quad \text{for } x_0 \neq 0.
        \end{equation*}
        $$

    2.  **[5 points]** Show that
        $$
        \begin{equation*}
                                \int_{\mathbb{R}^n} \phi(x,t)dx = 1 \quad \forall t > 0.
        \end{equation*}
        $$

    3.  **[5 points]** For $\delta > 0$, show that
        $$
        \begin{equation*}
                                \lim\limits_{t\to0} \int_{|x - y| > \delta} \phi(x - y, t)dy = 0.
        \end{equation*}
        $$

3.  **[5 points]** Solve the heat equation:
    $$
    \begin{equation*}
                  \frac{\partial u}{\partial t} - \frac{\partial^2 u}{\partial x^2} = 0, \quad x \in \mathbb{R}, t > 0,
    \end{equation*}
    $$
    with initial condition $u(x,0) = f(x)$ using Fourier transform (assume appropriate conditions on $f$).

4.  **[5 points]** Consider the equation:
    $$
    \begin{equation*}
                  \frac{\partial u}{\partial t} - \frac{\partial^2 u}{\partial x^2} = 0, \quad x \in \mathbb{R}, t > 0.
    \end{equation*}
    $$
    Find all solutions of the form $u(x,t) = \frac{1}{\sqrt{t}} v\left(\frac{x}{2\sqrt{t}}\right)$.

5.  **[10 points]** Let $E(x,t,r)$ be the heat ball and $E(1) = E(0,0,1)$. Show that:
    $$
    \begin{equation*}
                  \int\int_{E(1)} \frac{|y|^2}{s^2} dyds = 4.
    \end{equation*}
    $$
    Use an appropriate transformation to evaluate:
    $$
    \begin{equation*}
                  \int\int_{E(r)} \frac{|y|^2}{|s|^2} dyds,
    \end{equation*}
    $$
    where $E(r) = E(0,0,r)$.

6.  **[5 points]** Define:
    $$
    \begin{equation*}
                  g(t) = \begin{cases} e^{-\frac{1}{t^\alpha}}, & t > 0, \\ 0, & t \leq 0, \end{cases}
    \end{equation*}
    $$
    with $\alpha > 1$, and consider:
    $$
    \begin{equation*}
                  u(x,t) = \sum\limits_{k=0}^{\infty} \frac{g^{(k)}(t)}{(2k)!} x^{2k}.
    \end{equation*}
    $$
    Show that this provides infinitely many solutions to the heat equation with zero boundary conditions.

7.  **[5 points]** Find a sequence of solutions $u_n$ of the one-dimensional heat equation:
    $$
    \begin{equation*}
                  \frac{\partial u}{\partial t} - \frac{\partial^2 u}{\partial x^2} = 0, \quad x \in (0, 2\pi), t > 0,
    \end{equation*}
    $$
    with boundary conditions $u(0,t) = u(2\pi,t) = 0$. Using separation of variables, construct a series solution and derive the condition ensuring that $u(x,0) = f(x)$.

8.  Show that if $u$ satisfies the heat equation $u_t - \Delta u = 0$ in $\Omega \times (0,T)$, then the following maximum principle holds:
    $$
    \begin{equation*}
                  \sup\limits_{\Omega \times (0,T)} u(x,t) = \sup\limits_{\Gamma_T} u(x,t).
    \end{equation*}
    $$

9.  **[5 points]** Show that if $u$ satisfies:
    $$
    \begin{equation*}
                  u_t - \Delta u = u, \quad \text{in } \Omega \times (0,T),
    \end{equation*}
    $$
    with $u(x,0) = 0$ for $x \in \Omega$ and $u(x,t) = 0$ on $\partial\Omega \times [0,T]$, then $u(x,t) = 0$ in $\Omega \times (0,T)$.

10. **[5 points]** Solve the heat equation:
    $$
    \begin{equation*}
                  u_t = u_{xx}, \quad x > 0, t > 0,
    \end{equation*}
    $$
    with initial and boundary conditions:
    $$
    \begin{equation*}
                  u(x,0) = g(x), \quad x > 0, \quad u(0,t) = 0, \quad t > 0.
    \end{equation*}
    $$
    (Hint: Use an odd extension to rewrite the equation in $\mathbb{R} \times (0,\infty)$.)
