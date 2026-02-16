---
layout: pages
eleventyComputed:
  title: "Teaching | {{ metadata.author.name }}"
page_title: Determinants
math: true
permalink: /teaching/Notes/determinant/
---

## Motivation: The Algebra of Linear Systems

The concept of the **determinant** arises naturally through the study of systems of linear equations. It serves as a fundamental algebraic tool that characterizes the existence and uniqueness of solutions. Specifically, the determinant acts as a "gatekeeper": its value dictates whether a system possesses a unique solution or behaves singularly.

### The $2 \times 2$ Case

To understand the origin of this quantity, let us consider a system of two linear equations with two variables:
$$
\begin{align*}
ax + by &= p \\
cx + dy &= q
\end{align*}
$$

Our objective is to isolate $x$ by eliminating $y$. To achieve this, we multiply the first equation by $d$ and the second by $b$:
$$
\begin{aligned}
adx + bdy &= dp \\
bcx + bdy &= bq
\end{aligned}
$$

Subtracting the second equation from the first yields:
$$ (ad - bc)x = dp - bq $$

This result reveals that a unique solution for $x$ exists if and only if the coefficient $(ad - bc)$ is non-zero. If $ad - bc = 0$, the equations are linearly dependent, and the system fails to yield a unique solution. Because this specific quantity **determines** the fundamental nature of the system's solution, it is aptly named the **determinant**.

### The $3 \times 3$ Case

Generalizing this logic to a $3 \times 3$ system introduces greater algebraic complexity but follows the same principle of elimination. Consider the following system:
$$
\begin{align}
a_{11}x_1 + a_{12}x_2 + a_{13}x_3 &= b_1 \\
a_{21}x_1 + a_{22}x_2 + a_{23}x_3 &= b_2 \\
a_{31}x_1 + a_{32}x_2 + a_{33}x_3 &= b_3
\end{align}
$$

Assuming $a_{33} \neq 0$, we can eliminate $x_3$ from Equations (1) and (2) by performing the row operations $a_{33} \times (1) - a_{13} \times (3)$ and $a_{33} \times (2) - a_{23} \times (3)$. This reduction results in a $2 \times 2$ system in $x_1$ and $x_2$:
$$
\begin{align*}
(a_{11}a_{33} - a_{31}a_{13})x_1 + (a_{12}a_{33} - a_{32}a_{13})x_2 &= b_1a_{33} - b_3a_{13} \\
(a_{21}a_{33} - a_{31}a_{23})x_1 + (a_{22}a_{33} - a_{32}a_{23})x_2 &= b_2a_{33} - b_3a_{23}
\end{align*}
$$

Applying the $2 \times 2$ elimination logic to this reduced system, we isolate $x_1$. The resulting coefficient of $x_1$ is:
$$
\begin{aligned}
&(a_{11}a_{33} - a_{31}a_{13})(a_{22}a_{33} - a_{32}a_{23}) - (a_{12}a_{33} - a_{32}a_{13})(a_{21}a_{33} - a_{31}a_{23}) \\
&= a_{33}(a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{12}a_{21}a_{33} + a_{12}a_{31}a_{23} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31})
\end{aligned}
$$

For a unique solution to exist, this expression must be non-zero. Since $a_{33} \neq 0$, the condition simplifies to the following non-vanishing requirement:
$$ a_{11}a_{22}a_{33} - a_{11}a_{32}a_{23} - a_{12}a_{21}a_{33} + a_{12}a_{31}a_{23} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} \neq 0 $$

This quantity defines the **determinant** of the $3 \times 3$ matrix $A$:
$$ 
A=\begin{pmatrix} 
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} 
\end{pmatrix} 
$$

The explicit expansion of $\det(A)$ is given by:
$$
\begin{align*}
  \det(A) = &(a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}) \\
  &- (a_{11}a_{23}a_{32} + a_{12}a_{21}a_{33} + a_{13}a_{22}a_{31}) \tag{4}
\end{align*}
$$

### Fundamental Properties

The determinant possesses several key properties that facilitate both its calculation and its theoretical application. These properties can be verified directly from the algebraic expansion:

1.  **Row/Column Interchanges**: Interchanging any two rows or any two columns reverses the sign of the determinant.
2.  **Identical Rows/Columns**: If a matrix contain two identical rows or two identical columns, its determinant is zero.
3.  **Scalar Multiplication**: Multiplying a single row or column by a scalar $c$ scales the entire determinant by $c$.
4.  **Row/Column Addition**: Adding a multiple of one row (or column) to another row (or column) leaves the determinant unchanged.

### General Form: The Leibniz Formula

If we examine the $3 \times 3$ expansion in Equation (4), a clear structural pattern emerges:
1.  Each term is a product of exactly one element from each row and each column.
2.  The column indices $(j, k, l)$ constitute a **permutation** of the set $\{1, 2, 3\}$.
3.  The expansion consists of $3! = 6$ terms, representing every possible permutation.

This observation generalizes to any $n \times n$ matrix. The determinant of an $n \times n$ matrix $A$, known as the **Leibniz formula**, is defined as the sum over all permutations:

$$ \det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) a_{1\sigma(1)} a_{2\sigma(2)} \dots a_{n\sigma(n)} $$

where:
*   $S_n$ is the symmetric group (the set of all $n!$ permutations of $\{1, 2, \dots, n\}$).
*   $\sigma$ is a specific permutation mapping each row $i$ to a column $\sigma(i)$.
*   $\text{sgn}(\sigma)$ is the **sign** (or signature) of the permutation.

### The Sign of a Permutation

The sign of a permutation is determined by its decomposition into **disjoint cycles**. 

> ***Note***: A **cycle** $(i_1, i_2, \dots, i_k)$ describes a mapping where $i_1 \to i_2 \to \dots \to i_k \to i_1$. Elements not included in a cycle are considered fixed (cycles of length 1).

Let $n$ be the order of the permutation and $k$ be the total number of disjoint cycles (including fixed elements). The sign is defined as:
$$ \text{sgn}(\sigma) = (-1)^{n - k} $$

*   **Even Permutations**: If $n - k$ is even, $\text{sgn}(\sigma) = 1$.
*   **Odd Permutations**: If $n - k$ is odd, $\text{sgn}(\sigma) = -1$.

This formal definition provides a unified framework that consistently yields the $2 \times 2$ and $3 \times 3$ formulas derived earlier.

While the Leibniz formula generalizes the determinant to any $n \times n$ matrix, its formal justification requires demonstrating that it satisfies the essential property of the determinant: it is non-zero if and only if the matrix is invertible. This proof involves algebraic machinery that is beyond the scope of this course.

 





## Historical Context

The concept of the determinant is unique in mathematical history because it predates the formal definition of a "matrix" by nearly two centuries. It was initially developed as a specialized algorithmic tool for solving linear systems.

### Chronology of Development

*   **Late 17th Century**: The concept was discovered independently by **Seki Takakazu** in Japan (1683) and **Gottfried Wilhelm Leibniz** in Europe (1693).
*   **18th Century**: **Gabriel Cramer** published "Cramer's Rule" in 1750, providing a systematic method for solving systems of $n$ equations.
*   **19th Century**: **Carl Friedrich Gauss** introduced the term "determinant" in 1801, though in the context of quadratic forms. **Augustin-Louis Cauchy** (1812) established the modern definition, proving foundational theorems such as the multiplication theorem ($\det(AB) = \det(A)\det(B)$).

### Key Figure Contributions

*   **Seki Takakazu (1683)**: Developed methods for calculating the "resultant" of polynomials. He successfully computed determinants for matrices up to $5 \times 5$, predating European developments.
*   **Gottfried Wilhelm Leibniz (1693)**: Recognized that a system of three equations in two unknowns has a solution only if a specific combination of coefficients—the determinant—vanishes.
*   **Gabriel Cramer (1750)**: Formulated the rule that bears his name, expressing the variables of a linear system as the ratio of two determinants.
*   **Carl Friedrich Gauss (1801)**: While his term "determinant" originally referred to the discriminant of a quadratic form, his work on Gaussian elimination provided the numerical foundation for matrix theory.
*   **Augustin-Louis Cauchy (1812)**: Provided the first modern and systematic treatment. Cauchy introduced the vertical bar notation, defined adjoint matrices, and proved the multiplicative property of determinants.

