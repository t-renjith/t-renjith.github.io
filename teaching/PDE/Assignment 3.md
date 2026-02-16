---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/assignment-3/
---

## Assignment 3

1.  **[20 points]** Determine the types of the following equations, and reduce them to canonical form.

    1.  $u_{xx} + 2e^{x+y}u_{xy} + e^{2y}u_{yy} = 0.$

    2.  $u_{xx} + 2u_{xy} + 4u_{xz} + 5u_{zz} + u_x + 2u_y = 0 \; (\text{in } \mathbb{R}^3).$

    3.  $u_{xx} - 2 \sin x u_{xy} - \cos^2 x u_{yy} - \cos x u_y = 0.$

    4.  $\sin^4(2x) u_{xx} + 4\sin^4(2x)u = \frac{\partial^2 u}{\partial t^2}.$

2.  **[10 points]** Use Gauss-Divergence Theorem to drive the following integration by parts formula

    1.  $$\int_\Omega v\frac{\partial u}{\partial x_i}=-\int_\Omega u\frac{\partial v}{\partial x_i}+\int_{\partial\Omega}uv\nu^i$$

    2.  $$\int_\Omega v\Delta u=-\int_\Omega\nabla u\nabla v+\int_{\partial\Omega}\frac{\partial u}{\partial \nu}v$$

3.  **[20 points]** Let $\Omega$ be a open bounded subset of $\mathbb{R}^n$ with $\nu$ the outward unit normal vector at $\partial\Omega$, $A$ be an $n\times n$ matrix and $L=\text{div}(A\nabla u)$ be an elliptic operator on $\Omega$. Discuss the uniqueness of solution (if it exists) for the following PDEs:

    1.  $$ Lu=f \text{ in } \Omega,\quad u=g \text{ on } \partial\Omega$$

    2.  $$ Lu=f \text{ in } \Omega,\quad A\nabla u \cdot \nu = g \text{ on } \partial\Omega$$

    3.  $$ Lu-u=f \text{ in } \Omega,\quad A\nabla u \cdot \nu = g \text{ on } \partial\Omega$$
