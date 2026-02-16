---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/assignment-1/
---

## Assignment 1

1. **[5 points]** Find and sketch some sample characteristic curves of the PDE:$$(x + 2)u_x + 2y u_y = 2u$$ in the $x-y$ plane.  Write the ODE for $u$ along a characteristic curve with $x$ as the parameter and then solve the PDE with the initial condition $u(-1, y) = \sqrt{|y|}, y>0$. 

2. **[15 points]** Consider the PDE: $$x u_x + y u_y = 2u, x > 0, y > 0.$$
   Plot the characteristic curves and solve the equation with the following initial conditions in the domain given above:

   1. $u = 1$ on the hyperbola $xy = 1$. 

   2. $u = 1$ on the circle $x^2 + y^2 = 1$.

   3. Can you solve the equation, in general, if certain initial data is prescribed on the initial curve $y = e^x$? Justify with reasons.

3. **[20 points]** Sketch the characteristic curve, the initial curve, and solve the following problems: 

   1. $x u_x + y u_y = k u, \; x \in \mathbb{R}, \; y \geq \alpha > 0; \; u(x, \alpha) = F(x)$, where $k$, $\alpha$ are fixed and $F$ is a given smooth function.

   2. $y u_x - x u_y = 0; \; u(x, 0) = x^2$. 

   3. $x^2 u_x - y^2 u_y = 0; \; u(1, y) = F(y)$.

   4. $y u_x + x u_y = 0; \; u(0, y) = e^{-y^2}$. 

4. **[10 points]** Solve the quasi-linear problem and verify transversality conditions: 

   1. $u u_x + u_y = 0, \; u(x, 0) = x$. 
   
   2. $u u_x + u_y = 1, \; u(x, x) = x/2, \; x \in (0, 1]$. 