---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/assignment-6/
---

## Assignment 6

1.  **[5 points]** Prove the characteristic parallelogram property for wave equations.

2.  **[5 points]** Solve the problem with two different characteristic speeds $c_1$ and $c_2$:

    $$
    \begin{equation*}
                  \left(\frac{\partial}{\partial t} - c_1 \frac{\partial}{\partial x}\right)\left(\frac{\partial}{\partial t} - c_2 \frac{\partial}{\partial x}\right) u = 0, \quad \text{in } \mathbb{R} \times (0,\infty).
    \end{equation*}
    $$

    Analyze the cases $c_1 \neq c_2$ and $c_1 = c_2$, and derive D’Alembert’s formula as a special case. Discuss any potential loss of regularity in the one-dimensional case.

3.  **[5 points]** Integrate the wave equation $u_{tt} - u_{xx} = f(x,t)$ in the characteristic triangle $P(x,t)$, $Q(x-ct,0)$, $R(x+ct,0)$ to derive a formula for the solution. (Hint: Use the identity $u_{tt} - u_{xx} = (u_t)_t - (u_x)_x$.)

4.  **[5 points]** Solve the wave equation in the first quadrant with non-homogeneous Dirichlet boundary condition:

    $$
    \begin{equation*}
                  u_{tt} - u_{xx} = 0, \quad \text{in } (0,\infty) \times (0,\infty)
    \end{equation*}
    $$

    with initial and boundary conditions:

    $$
    \begin{equation*}
                  u(x,0) = f(x), \quad u_t(x,0) = g(x), \quad u(0,t) = h(t), \quad t > 0.
    \end{equation*}
    $$

    Derive the formula for $x < ct$ using the parallelogram identity.

5.  **[5 points]** Solve the above equation with the Neumann non-homogeneous boundary condition where $u(0,t) = h(t)$ is replaced by $u_x(0,t) = h(t)$.

6.  **[5 points]** Let $c_1, \dots, c_k$ be distinct positive real numbers. Show that the solution of the equation:

    $$
    \begin{equation*}
                  (\partial_t^2 - c_1^2 \partial_x^2) \dots (\partial_t^2 - c_k^2 \partial_x^2) u = 0,
    \end{equation*}
    $$

    can be written as:

    $$
    \begin{equation*}
                  u(x,t) = \sum_{j=0}^{k} u_j(x,t),
    \end{equation*}
    $$

    where each $u_j$ satisfies $\partial_t^2 u_j - c_j^2 \partial_x^2 u_j = 0$. This result also holds in higher dimensions.

7.  **[5 points]** Consider the case $n=3$ for:

    $$
    \begin{equation*}
                  (\partial_t^2 - c^2 \partial_x^2)(\partial_t^2 - c^2 \partial_x^2) u = 0, \quad c > 0.
    \end{equation*}
    $$

    Given smooth initial data $\partial_t^j u(x,0) = f_j(x)$ for $j = 0,1,2,3$, explicitly determine the solution.

8.  **[5 points]** Consider the wave equation:
    $$
    \begin{equation*}
                  u_{tt} - \Delta u = 0, \quad \text{in } \mathbb{R}^n \times (0,\infty),
    \end{equation*}
    $$
    with initial data:
    $$
    \begin{equation*}
                  u(x,0) = \phi(x), \quad u_t(x,0) = \psi(x).
    \end{equation*}
    $$
    Verify that the solution is given by:
    $$
    \begin{equation*}
                  u(x,t) = u_{\phi}(x,t) + \int_0^t u_{\psi}(x,s)ds,
    \end{equation*}
    $$
    and also by:
    $$
    \begin{equation*}
                  u(x,t) = v_{\psi}(x,t) + \frac{\partial}{\partial t} v_{\phi}(x,t).
    \end{equation*}
    $$
