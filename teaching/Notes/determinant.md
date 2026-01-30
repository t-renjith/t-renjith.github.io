---
layout: notes
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Teaching
course: "Determinant"
permalink: /teaching/Notes/determinant/
---

## Motivation: Systems of Linear Equations

Consider a system of two linear equations with two unknowns:
$$
\begin{align*}
ax + by = p \\\\
cx + dy = q
\end{align*}
$$

To solve for $x$, we eliminate $y$ by multiplying the first equation by $d$ and the second by $b$:
$$
\begin{aligned}
adx + bdy &= dp \\\\
bcx + bdy &= bq
\end{aligned}
$$

Subtracting the second equation from the first yields:
$$ (ad - bc)x = dp - bq $$

We can solve for $x$ provided that $ad - bc \neq 0$. If $ad - bc = 0$, the equations are linearly dependent (one is a multiple of the other), and the system does not have a unique solution.

Because the quantity $ad - bc$ **determines** the existence and nature of the solution to the system, we call it the **determinant**.

Now consider a system of three linear equations with three unknowns:
$$
\begin{align}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 = b_1\\\\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 = b_2\\\\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 = b_3
\end{align}
$$

Suppose that $a_{33}\neq0$. Then we can eliminate $x_3$ from Equations (1) and (2) by performing $$a_{33}\times(1)- a_{13}\times(3)\text{ and }a_{33}\times(2)- a_{23}\times(3)$$ to get the system of 2 equations in 2 unknowns:
$$
\begin{align}
(a_{11}a_{33} - a_{31}a_{13})x_1 + (a_{12}a_{33} - a_{32}a_{13})x_2 &= b_1a_{33} - b_3a_{13}\\\\
(a_{21}a_{33} - a_{31}a_{23})x_1 + (a_{22}a_{33} - a_{32}a_{23})x_2 &= b_2a_{33} - b_3a_{23}
\end{align}
$$

Now as we done above we can eliminate $x_2$ from the system of equations to get a single equation in $x_1$. Then the coefficiet of $x_1$ is

$$
\begin{align*}
&(a_{11}a_{33} - a_{31}a_{13})(a_{22}a_{33} - a_{32}a_{23}) - (a_{12}a_{33} - a_{32}a_{13})(a_{21}a_{33} - a_{31}a_{23})\\\\
= & a_{33}(a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{12}a_{21}a_{33} + a_{12}a_{31}a_{23} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31})
\end{align*}
$$

Now we can solve the system if the last expression is non-zero. Since $a_{33}\neq0$ the last expression is non-zero if and only if $$a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{12}a_{21}a_{33} + a_{12}a_{31}a_{23} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31}\neq0$$. This quantity is called the **determinant** of the matrix 
$$\begin{pmatrix} a_{11} & a_{12} & a_{13}\\\\ a_{21} & a_{22} & a_{23}\\\\ a_{31} & a_{32} & a_{33} \end{pmatrix}$$.

## History of Determinants

The concept of the determinant predates the formal definition of a matrix by nearly two centuries. Historically, determinants were developed as a tool for solving systems of linear equations:

*   **17th Century:** The concept was independently discovered by **Seki Takakazu** in Japan (1683) and **Gottfried Wilhelm Leibniz** in Europe (1693).
*   **18th Century:** **Gabriel Cramer** published "Cramer's Rule" in 1750, providing a general algorithm for solving linear systems using determinants.
*   **19th Century:** The term "determinant" was first introduced by **Carl Friedrich Gauss** in 1801, though he used it in the context of quadratic forms. **Augustin-Louis Cauchy** (1812) was the first to use the term in its modern sense, establishing the foundational properties and notation used in linear algebra today.

### Key Contributions

*   **Seki Takakazu (1683):** Developed a method for calculating the "resultant" of two polynomials, which involved a precursor to the determinant. He successfully computed determinants for $2 \times 2$, $3 \times 3$, $4 \times 4$, and $5 \times 5$ matrices to solve systems of linear equations.
*   **Gottfried Wilhelm Leibniz (1693):** Investigated systems of linear equations and introduced a systematic notation for coefficients. He recognized that a system of three equations in two unknowns has a solution only if a specific combination of the coefficients (the determinant) vanishes.
*   **Gabriel Cramer (1750):** In his work *Introduction à l'analyse des lignes courbes algébriques*, he formulated **Cramer's Rule**. This rule provides an explicit formula for the solution of a system of $n$ linear equations with $n$ unknowns, where each variable is expressed as a ratio of two determinants.
*   **Carl Friedrich Gauss (1801):** In *Disquisitiones Arithmeticae*, Gauss used the term "determinant" to describe the discriminant of a quadratic form ($b^2 - ac$). While not the modern definition, his work on Gaussian elimination and the transformation of forms was crucial for the development of matrix theory.
*   **Augustin-Louis Cauchy (1812):** Cauchy is credited with the first modern and systematic treatment of determinants. He proved the **multiplication theorem** ($\det(AB) = \det(A)\det(B)$), introduced the concept of adjoint matrices, and established the notation of using double vertical bars to denote the determinant of an array.

