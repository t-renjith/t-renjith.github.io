---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Partial Differential Equations
math: true
permalink: /teaching/PDE/assignment-7/
---

## Assignment 7

1.  **[5 points]** Is there an $f$ in $L^1(\mathbb{R})$ such that $f * f = f$? What about $L^2(\mathbb{R})$

2.  **[5 points]** For $\delta > 0$, let $f_\delta(x) = f(\delta x)$. Compute the Fourier transform of $f$. Hence or otherwise show the following:

    - If $\|\hat{f}\|_q \leq \|f\|_p$ for all $f \in L^p$, then $\frac{1}{p} + \frac{1}{q} = 1$.

    - If $\|\hat{f}\|_p \leq \|f\|_p$ for all $f \in L^p$, then $p = 2$.

3.  **[5 points]** Compute the Fourier transform of $\chi_{[-n,n]}$. Let $f_n(x) = \frac{\sin x \sin nx}{x^2}$. Show that $\|f_n\|_1 \to \infty$ as $n \to \infty$. Hence or otherwise prove that the map $f \to \hat{f}$ is **not onto** from $L^1(\mathbb{R})$ to $C_0(\mathbb{R})$. Prove that the range of the Fourier transform is dense in $C_0(\mathbb{R})$.

4.  **[5 points]** If $f, g \in C_c^\infty(\mathbb{R})$ and $f * g = 0$, prove that either $f$ or $g$ is zero. Prove that there exist $f$ and $g$ in $S(\mathbb{R})$ such that $f * g = 0$.
