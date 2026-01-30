---
layout: notes
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Teaching
course: "Determinants"
permalink: /teaching/Notes/determinant/
---

## Motivation: Systems of Linear Equations

The concept of the determinant arises naturally when we attempt to solve systems of linear equations. It serves as a "gatekeeper" that determines whether a unique solution exists.

### The $2 \times 2$ Case
Consider a system of two linear equations with two unknowns:
$$
\begin{align*}
ax + by &= p \\\\
cx + dy &= q
\end{align*}
$$

To solve for $x$, we can eliminate $y$ by multiplying the first equation by $d$ and the second by $b$:
$$
\begin{aligned}
adx + bdy &= dp \\\\
bcx + bdy &= bq
\end{aligned}
$$

Subtracting the second equation from the first yields:
$$ (ad - bc)x = dp - bq $$

It is clear that we can solve for $x$ provided that $ad - bc \neq 0$. If $ad - bc = 0$, the equations are linearly dependent, and the system fails to yield a unique solution. Because this quantity **determines** the existence and nature of the solution, it is aptly named the **determinant**.

### The $3 \times 3$ Case
Now, consider a system of three linear equations with three unknowns:
$$
\begin{align}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 &= b_1 \\\\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 &= b_2 \\\\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 &= b_3
\end{align}
$$

Suppose $a_{33} \neq 0$. We can eliminate $x_3$ from Equations (1) and (2) by performing the operations $a_{33} \times (1) - a_{13} \times (3)$ and $a_{33} \times (2) - a_{23} \times (3)$. This results in a system of two equations in two unknowns:
$$
\begin{align*}
(a_{11}a_{33} - a_{31}a_{13})x_1 + (a_{12}a_{33} - a_{32}a_{13})x_2 &= b_1a_{33} - b_3a_{13} \\\\
(a_{21}a_{33} - a_{31}a_{23})x_1 + (a_{22}a_{33} - a_{32}a_{23})x_2 &= b_2a_{33} - b_3a_{23}
\end{align*}
$$

Following the same logic as the $2 \times 2$ case, we eliminate $x_2$ to isolate $x_1$. The resulting coefficient of $x_1$ is:
$$
\begin{aligned}
&(a_{11}a_{33} - a_{31}a_{13})(a_{22}a_{33} - a_{32}a_{23}) - (a_{12}a_{33} - a_{32}a_{13})(a_{21}a_{33} - a_{31}a_{23}) \\\\
&= a_{33}(a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{12}a_{21}a_{33} + a_{12}a_{31}a_{23} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31})
\end{aligned}
$$

The system has a unique solution if and only if this expression is non-zero. Since $a_{33} \neq 0$, the condition simplifies to:
$$ a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{12}a_{21}a_{33} + a_{12}a_{31}a_{23} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} \neq 0 $$

This quantity is defined as the **determinant** of the $3 \times 3$ matrix:
$$ 
\begin{pmatrix} 
a_{11} & a_{12} & a_{13} \\\\
a_{21} & a_{22} & a_{23} \\\\
a_{31} & a_{32} & a_{33} 
\end{pmatrix} 
$$

## History of Determinants

Interestingly, the concept of the determinant predates the formal definition of a matrix by nearly two centuries. Determinants were originally developed as a specialized tool for solving linear systems:

*   **17th Century:** The concept was independently discovered by **Seki Takakazu** in Japan (1683) and **Gottfried Wilhelm Leibniz** in Europe (1693).
*   **18th Century:** **Gabriel Cramer** published "Cramer's Rule" in 1750, providing a general algorithm for solving linear systems using determinants.
*   **19th Century:** The term "determinant" was introduced by **Carl Friedrich Gauss** in 1801 (within the context of quadratic forms). **Augustin-Louis Cauchy** (1812) was the first to use the term in its modern sense, establishing the foundational properties and notation used today.

### Key Contributions

*   **Seki Takakazu (1683):** Developed a method for calculating the "resultant" of two polynomials—a precursor to the determinant. He successfully computed determinants for matrices up to $5 \times 5$ to solve complex linear systems.
*   **Gottfried Wilhelm Leibniz (1693):** Investigated systems of linear equations and introduced systematic notation for coefficients. He recognized that a system of three equations in two unknowns has a solution only if a specific combination of coefficients—the determinant—vanishes.
*   **Gabriel Cramer (1750):** Formulated **Cramer's Rule** in his work *Introduction à l'analyse des lignes courbes algébriques*. This rule provides an explicit formula for solving a system of $n$ linear equations, expressing each variable as a ratio of two determinants.
*   **Carl Friedrich Gauss (1801):** In *Disquisitiones Arithmeticae*, Gauss used "determinant" to describe the discriminant of a quadratic form ($b^2 - ac$). His work on Gaussian elimination was instrumental in the later development of matrix theory.
*   **Augustin-Louis Cauchy (1812):** Cauchy provides the first modern and systematic treatment of determinants. He proved the **multiplication theorem** ($\det(AB) = \det(A)\det(B)$), introduced adjoint matrices, and established the familiar vertical bar notation.

