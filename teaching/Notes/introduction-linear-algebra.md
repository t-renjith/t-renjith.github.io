---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: Introduction to Linear Algebra
math: true
permalink: /teaching/Notes/introduction-linear-algebra/
---

## 1. Motivation: From Single Equations to Coupled Systems

Linear algebra is often introduced through abstract definitions of vector spaces, linear transformations, and matrices. However, its most compelling intuition arises when solving dynamic problems—specifically, systems of differential equations.

### 1.1 The Uncoupled Case (A Single Degree of Freedom)

Consider the simplest first-order scalar differential equation:

$$
\frac{dx}{dt} = a x, \quad x(0) = x_0
$$

where $a \in \mathbb{R}$ is a constant. We can solve this immediately by separation of variables or an integrating factor:

$$
x(t) = x_0 e^{at}
$$

The behavior is completely determined by the sign and magnitude of $a$:
- If $a > 0$, $x(t)$ grows exponentially.
- If $a < 0$, $x(t)$ decays exponentially to zero.
- If $a = 0$, $x(t)$ remains constant ($x(t) = x_0$).

Now, suppose we have two such independent processes:

$$
\begin{aligned}
\frac{dx_1}{dt} &= a x_1, \quad x_1(0) = x_{1,0} \\
\frac{dx_2}{dt} &= b x_2, \quad x_2(0) = x_{2,0}
\end{aligned}
$$

Because the equation for $x_1$ does not involve $x_2$, and the equation for $x_2$ does not involve $x_1$, the system is **uncoupled**. The solution is simply:

$$
x_1(t) = x_{1,0} e^{at}, \quad x_2(t) = x_{2,0} e^{bt}
$$

Solving uncoupled equations is straightforward because each variable evolves along its own independent one-dimensional direction.

---

### 1.2 The Coupled System

In reality, physical, economic, and biological systems rarely evolve in isolation. Quantities interact: predator and prey populations affect each other, heat diffuses between adjacent compartments, and currents in coupled electrical circuits influence one another.

Consider a simple linear system where the rate of change of each variable depends on *both* variables:

$$
\begin{aligned}
\frac{dx_1}{dt} &= a x_1 + b x_2 \\
\frac{dx_2}{dt} &= c x_1 + d x_2
\end{aligned}
$$

with initial values $x_1(0)$ and $x_2(0)$.

Here, the equations are **coupled** whenever $b \neq 0$ or $c \neq 0$. We cannot solve for $x_1(t)$ without knowing $x_2(t)$, nor can we solve for $x_2(t)$ without knowing $x_1(t)$.

---

## 2. The Matrix Representation

We can organize this coupled system into a compact geometric language by grouping the state variables into a vector $\mathbf{x}(t) \in \mathbb{R}^2$ and the coupling coefficients into a matrix $A \in M_2(\mathbb{R})$:

$$
\mathbf{x}(t) = \begin{pmatrix} x_1(t) \\ x_2(t) \end{pmatrix}, \quad 
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

The system of differential equations is written compactly as:

$$
\frac{d\mathbf{x}}{dt} = A \mathbf{x}, \quad \mathbf{x}(0) = \mathbf{x}_0
$$

Notice the striking resemblance between:

$$
\frac{dx}{dt} = a x \quad \text{and} \quad \frac{d\mathbf{x}}{dt} = A \mathbf{x}
$$

If $A$ is a diagonal matrix ($b = c = 0$):

$$
A = \begin{pmatrix} a & 0 \\ 0 & d \end{pmatrix}
$$

then the system decouples into two scalar equations. 

This leads to the fundamental question that drives linear algebra:

> **Can we change our coordinate system (our basis) so that a coupled system $\frac{d\mathbf{x}}{dt} = A\mathbf{x}$ transforms into an uncoupled, diagonal system?**

---

## 3. Seeking Special Directions: Eigenvalues and Eigenvectors

Let us search for special solutions that retain the simplicity of the one-dimensional exponential growth/decay. 

Suppose there exists a non-zero constant vector $\mathbf{v} \in \mathbb{R}^2 \setminus \{\mathbf{0}\}$ such that the solution trajectory stays along the straight line spanned by $\mathbf{v}$:

$$
\mathbf{x}(t) = e^{\lambda t} \mathbf{v}
$$

for some scalar $\lambda \in \mathbb{C}$.

Differentiating $\mathbf{x}(t)$ with respect to time:

$$
\frac{d\mathbf{x}}{dt} = \lambda e^{\lambda t} \mathbf{v}
$$

Substituting into the system $\frac{d\mathbf{x}}{dt} = A\mathbf{x}$:

$$
\lambda e^{\lambda t} \mathbf{v} = A \left( e^{\lambda t} \mathbf{v} \right) = e^{\lambda t} A \mathbf{v}
$$

Since the scalar factor $e^{\lambda t}$ is never zero, we divide by it to obtain:

$$
A \mathbf{v} = \lambda \mathbf{v}
$$

This is the celebrated **eigenvalue equation**:
- The scalar $\lambda$ is called an **eigenvalue** of $A$.
- The non-zero vector $\mathbf{v}$ is called an **eigenvector** of $A$ corresponding to $\lambda$.

### 3.1 The Characteristic Equation

Rewriting $A\mathbf{v} = \lambda \mathbf{v}$ with the identity matrix $I$:

$$
(A - \lambda I) \mathbf{v} = \mathbf{0}
$$

For a non-zero vector $\mathbf{v}$ to exist in the null space of $(A - \lambda I)$, the matrix $(A - \lambda I)$ must be singular (non-invertible). Consequently, its determinant must vanish:

$$
\det(A - \lambda I) = 0
$$

For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$
\det \begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = (a - \lambda)(d - \lambda) - bc = \lambda^2 - (a + d)\lambda + (ad - bc) = 0
$$

Introducing the **trace** $\operatorname{tr}(A) = a + d$ and the **determinant** $\det(A) = ad - bc$, the characteristic polynomial is:

$$
p(\lambda) = \lambda^2 - \operatorname{tr}(A)\lambda + \det(A) = 0
$$

---

## 4. A Concrete Example: Decoupling a Coupled System

Consider the coupled system:

$$
\begin{aligned}
\frac{dx_1}{dt} &= 4 x_1 - 2 x_2 \\
\frac{dx_2}{dt} &= x_1 + x_2
\end{aligned}
$$

The coefficient matrix is:

$$
A = \begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}
$$

### Step 1: Find the Eigenvalues

Compute the characteristic equation:

$$
\det(A - \lambda I) = \det \begin{pmatrix} 4 - \lambda & -2 \\ 1 & 1 - \lambda \end{pmatrix} = (4 - \lambda)(1 - \lambda) - (-2)(1) = \lambda^2 - 5\lambda + 6 = 0
$$

Factoring gives:

$$
(\lambda - 2)(\lambda - 3) = 0 \implies \lambda_1 = 2, \quad \lambda_2 = 3
$$

### Step 2: Find the Eigenvectors

For $\lambda_1 = 2$, solve $(A - 2I)\mathbf{v}_1 = \mathbf{0}$:

$$
\begin{pmatrix} 2 & -2 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} v_{1} \\ v_{2} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 - v_2 = 0 \implies \mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}
$$

For $\lambda_2 = 3$, solve $(A - 3I)\mathbf{v}_2 = \mathbf{0}$:

$$
\begin{pmatrix} 1 & -2 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} v_{1} \\ v_{2} \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 - 2v_2 = 0 \implies \mathbf{v}_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

### Step 3: Construct the General Solution

Each eigenvalue-eigenvector pair yields a fundamental solution:

$$
\mathbf{x}_{(1)}(t) = e^{2t} \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \quad 
\mathbf{x}_{(2)}(t) = e^{3t} \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

Because the differential operator $\frac{d}{dt} - A$ is linear, any linear combination of solutions is also a solution (principle of superposition):

$$
\mathbf{x}(t) = c_1 e^{2t} \begin{pmatrix} 1 \\ 1 \end{pmatrix} + c_2 e^{3t} \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

The constants $c_1, c_2$ are uniquely determined by the initial condition $\mathbf{x}(0) = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2$.

---

## 5. Change of Coordinates: The Geometry of Diagonalization

Why did finding eigenvectors solve the coupled system? Because the eigenvectors $\mathbf{v}_1$ and $\mathbf{v}_2$ define a **new coordinate system** in which the action of $A$ is purely diagonal.

### 5.1 The Change of Basis Matrix

Construct a matrix $P$ whose columns are the eigenvectors $\mathbf{v}_1$ and $\mathbf{v}_2$:

$$
P = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}
$$

Because $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent, $\det(P) = 1(1) - 2(1) = -1 \neq 0$, so $P$ is invertible:

$$
P^{-1} = \frac{1}{-1} \begin{pmatrix} 1 & -2 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}
$$

Any state vector $\mathbf{x}$ can be expressed in terms of the eigenvector basis as $\mathbf{x} = P \mathbf{y}$, where $\mathbf{y} = \begin{pmatrix} y_1 \\ y_2 \end{pmatrix}$ represents the coordinates in the new basis:

$$
\mathbf{x}(t) = P \mathbf{y}(t) \quad \iff \quad \mathbf{y}(t) = P^{-1}\mathbf{x}(t)
$$

### 5.2 Decoupling via Similarity Transformation

Substitute $\mathbf{x} = P\mathbf{y}$ into the differential equation $\frac{d\mathbf{x}}{dt} = A\mathbf{x}$:

$$
P \frac{d\mathbf{y}}{dt} = A (P \mathbf{y})
$$

Multiplying both sides on the left by $P^{-1}$:

$$
\frac{d\mathbf{y}}{dt} = (P^{-1} A P) \mathbf{y}
$$

Now examine the product $AP$:

$$
A P = A \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{pmatrix} = \begin{pmatrix} A\mathbf{v}_1 & A\mathbf{v}_2 \end{pmatrix} = \begin{pmatrix} \lambda_1 \mathbf{v}_1 & \lambda_2 \mathbf{v}_2 \end{pmatrix}
$$

We can factor this into the matrix product:

$$
\begin{pmatrix} \lambda_1 \mathbf{v}_1 & \lambda_2 \mathbf{v}_2 \end{pmatrix} = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{pmatrix} \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix} = P D
$$

where $D$ is the diagonal matrix of eigenvalues:

$$
D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}
$$

Multiplying $AP = PD$ on the left by $P^{-1}$, we arrive at:

$$
P^{-1} A P = D
$$

The transformed system for $\mathbf{y}(t)$ is completely uncoupled:

$$
\begin{pmatrix} \frac{dy_1}{dt} \\ \frac{dy_2}{dt} \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} \begin{pmatrix} y_1 \\ y_2 \end{pmatrix} \iff \begin{aligned} \frac{dy_1}{dt} &= 2y_1 \implies y_1(t) = y_1(0)e^{2t} \\ \frac{dy_2}{dt} &= 3y_2 \implies y_2(t) = y_2(0)e^{3t} \end{aligned}
$$

Finally, transforming back to the original coordinates:

$$
\mathbf{x}(t) = P \mathbf{y}(t) = P \begin{pmatrix} y_1(0)e^{2t} \\ y_2(0)e^{3t} \end{pmatrix}
$$

The coupled dynamics have been uncoupled into independent scalar exponential modes.

---

## 6. General Theory: Diagonalizability

The procedure above generalizes from $2 \times 2$ systems to $n \times n$ matrices and operators.

### 6.1 Definition

A square matrix $A \in M_n(\mathbb{F})$ is called **diagonalizable** over a field $\mathbb{F}$ if there exists an invertible matrix $P \in GL_n(\mathbb{F})$ and a diagonal matrix $D \in M_n(\mathbb{F})$ such that:

$$
P^{-1} A P = D \quad \text{or equivalently} \quad A = P D P^{-1}
$$

The transformation $A \mapsto P^{-1}AP$ is called a **similarity transformation**. Two matrices related in this way represent the same linear operator under different choices of basis.

---

### 6.2 The Fundamental Characterization Theorem

> **Theorem (Criterion for Diagonalizability)**  
> An $n \times n$ matrix $A$ is diagonalizable if and only if there exists a basis for $\mathbb{F}^n$ consisting entirely of eigenvectors of $A$. That is, $A$ possesses $n$ linearly independent eigenvectors.

**Proof sketch:**
- $(\Rightarrow)$ Suppose $P^{-1}AP = D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$. Then $AP = PD$. If $\mathbf{v}_j$ denotes the $j$-th column of $P$, equating columns gives:
  $$ A \mathbf{v}_j = \lambda_j \mathbf{v}_j \quad \text{for } j = 1, \dots, n $$
  Since $P$ is invertible, its columns $\{\mathbf{v}_1, \dots, \mathbf{v}_n\}$ are linearly independent, hence form an eigenbasis.
- $(\Leftarrow)$ Conversely, if $A$ has $n$ linearly independent eigenvectors $\mathbf{v}_1, \dots, \mathbf{v}_n$ with eigenvalues $\lambda_1, \dots, \lambda_n$, define $P = \begin{pmatrix} \mathbf{v}_1 & \cdots & \mathbf{v}_n \end{pmatrix}$. Since the columns are linearly independent, $P$ is invertible, and $AP = PD \implies P^{-1}AP = D$. $\blacksquare$

---

### 6.3 Distinct Eigenvalues Guarantee Diagonalizability

> **Theorem (Linear Independence of Eigenvectors)**  
> Eigenvectors corresponding to pairwise distinct eigenvalues are linearly independent.

**Corollary:** If an $n \times n$ matrix $A$ has $n$ distinct eigenvalues in $\mathbb{F}$, then $A$ is diagonalizable over $\mathbb{F}$.

---

### 6.4 When Does Diagonalization Fail? Multiplicities and Defective Matrices

When an eigenvalue is repeated, diagonalizability is not guaranteed. We must distinguish between two notions of multiplicity:

1. **Algebraic Multiplicity ($m_a(\lambda)$)**: The multiplicity of $\lambda$ as a root of the characteristic polynomial $\det(A - \lambda I) = 0$.
2. **Geometric Multiplicity ($m_g(\lambda)$)**: The dimension of the eigenspace corresponding to $\lambda$:
   $$ m_g(\lambda) = \dim(\ker(A - \lambda I)) = n - \operatorname{rank}(A - \lambda I) $$

For any eigenvalue $\lambda$, it is always true that:

$$
1 \le m_g(\lambda) \le m_a(\lambda)
$$

> **Theorem (General Diagonalizability Condition)**  
> A matrix $A \in M_n(\mathbb{F})$ is diagonalizable if and only if:
> 1. The characteristic polynomial splits completely into linear factors over $\mathbb{F}$.
> 2. For every eigenvalue $\lambda$, its geometric multiplicity equals its algebraic multiplicity:
>    $$ m_g(\lambda) = m_a(\lambda) $$

Matrices for which $m_g(\lambda) < m_a(\lambda)$ for some $\lambda$ are called **defective** (or non-diagonalizable).

---

## 7. The Non-Diagonalizable Case: What Happens to the Differential Equation?

To understand what happens physically and mathematically when a matrix fails to be diagonalizable, consider the system:

$$
\begin{aligned}
\frac{dx_1}{dt} &= 2x_1 + x_2 \\
\frac{dx_2}{dt} &= 2x_2
\end{aligned}
$$

The coefficient matrix is a Jordan block:

$$
A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}
$$

### Analysis:
- The characteristic polynomial is $\det(A - \lambda I) = (2 - \lambda)^2 = 0$, giving eigenvalue $\lambda = 2$ with algebraic multiplicity $m_a(2) = 2$.
- The eigenspace is $\ker(A - 2I)$:
  $$ A - 2I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \implies \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_2 = 0 $$
  So the only eigenvectors are scalar multiples of $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$.
- The geometric multiplicity is $m_g(2) = 1 < m_a(2) = 2$. Therefore, $A$ is **not diagonalizable**. There is no basis of eigenvectors.

### Solving the System:
Notice how the solution behaves:
1. From $\frac{dx_2}{dt} = 2x_2$, we obtain:
   $$ x_2(t) = c_2 e^{2t} $$
2. Substituting this into the first equation:
   $$ \frac{dx_1}{dt} - 2x_1 = c_2 e^{2t} $$
3. Using the integrating factor $e^{-2t}$:
   $$ \frac{d}{dt}\left( x_1 e^{-2t} \right) = c_2 \implies x_1(t)e^{-2t} = c_1 + c_2 t $$
   $$ x_1(t) = c_1 e^{2t} + c_2 t e^{2t} $$

In vector form:

$$
\mathbf{x}(t) = c_1 e^{2t} \begin{pmatrix} 1 \\ 0 \end{pmatrix} + c_2 e^{2t} \left[ \begin{pmatrix} 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right]
$$

The term $t e^{2t}$—a secular term—appears precisely because the matrix cannot be fully diagonalized. This motivates the next major structure in linear algebra: the **Jordan Canonical Form** and **generalized eigenvectors**.

---

## 8. Matrix Exponentials: The Unified Perspective

When $A$ is diagonalizable ($A = P D P^{-1}$), computing functions of matrices becomes effortless. In particular, powers of $A$ simplify:

$$
A^2 = (P D P^{-1})(P D P^{-1}) = P D^2 P^{-1}, \quad \dots \quad A^k = P D^k P^{-1}
$$

For a diagonal matrix $D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, computing powers is trivial:

$$
D^k = \begin{pmatrix} \lambda_1^k & & 0 \\ & \ddots & \\ 0 & & \lambda_n^k \end{pmatrix}
$$

The formal solution to $\frac{d\mathbf{x}}{dt} = A\mathbf{x}$ is defined via the **matrix exponential**:

$$
\mathbf{x}(t) = e^{At} \mathbf{x}(0)
$$

where the matrix exponential is defined by the convergent Taylor series:

$$
e^{At} = \sum_{k=0}^{\infty} \frac{(At)^k}{k!} = I + At + \frac{A^2 t^2}{2!} + \frac{A^3 t^3}{3!} + \cdots
$$

Using $A^k = P D^k P^{-1}$:

$$
e^{At} = \sum_{k=0}^{\infty} \frac{(P D P^{-1} t)^k}{k!} = P \left( \sum_{k=0}^{\infty} \frac{(Dt)^k}{k!} \right) P^{-1} = P e^{Dt} P^{-1}
$$

Because $D$ is diagonal, its exponential is simply the exponential of its diagonal entries:

$$
e^{Dt} = \begin{pmatrix} e^{\lambda_1 t} & & 0 \\ & \ddots & \\ 0 & & e^{\lambda_n t} \end{pmatrix}
$$

Thus:

$$
\mathbf{x}(t) = P \begin{pmatrix} e^{\lambda_1 t} & & 0 \\ & \ddots & \\ 0 & & e^{\lambda_n t} \end{pmatrix} P^{-1} \mathbf{x}(0)
$$

This encapsulates the essence of linear algebra: **diagonalization finds the intrinsic coordinate frame where a complex coupled linear transformation acts simply as scalar multiplication along independent axes.**
