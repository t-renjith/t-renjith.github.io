---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: Matrix Groups
math: true
permalink: /teaching/Notes/matrixgroups/
---

## Set of all Invertible Matrices $GL_n(\mathbb{R})$

- **Algebraic Structure**: Forms a group under multiplication.
- **Boundedness**: Unbounded.
- **Topology**: Open in $M_n(\mathbb{R})$.
- **Components**: Has two connected components: $GL_n^+(\mathbb{R})$ ($det > 0$) and $GL_n^-(\mathbb{R})$ ($det < 0$).
- **Center**: $Z(GL_n(\mathbb{R})) = \{ \lambda I : \lambda \in \mathbb{R} \setminus \{0\} \}$.
- **Functional Definition**: $det^{-1}(\mathbb{R} \setminus \{0\})$.
- **Connectivity**: Not Connected.
- **Determinant Range**: $det(GL_n(\mathbb{R})) = \mathbb{R} \setminus \{0\}$.
- **Density**: Dense in $M_n(\mathbb{R})$.
  - Intersects all open sets.
  - Any singular matrix can be approximated by $GL_n(\mathbb{R})$.
  - Approximation Logic: $A + \delta I$ has eigenvalues $\sigma(A) + \delta$.

## Nilpotent Matrices

- **Algebraic Structure**: Not a group under addition or multiplication.
- **Topology**: Closed in $M_n(\mathbb{R})$.
- **Functional Definition**: $\bigcup_{k=1}^{n} f_k^{-1}(\{0\})$ where $f_k(A) = A^k$.
- **Spectrum**: All eigenvalues are $0$.
- **Trace/Det**: $Trace(A) = 0$, $det(A) = 0$.
- **Example**: The set of strictly upper triangular matrices is a subset.
- **Boundedness**: Unbounded.
- **Density**: Not dense.
- **Connectivity**: Path Connected.
  - Note: Illustrated by points $A$ and $B$ where $A$ and $B$ are nilpotent, connected via a path through the origin $O$.

## Idempotent Matrices

- **Algebraic Structure**: Not a subgroup under addition or multiplication.
- **Connectivity**: Not Connected.
- **Determinant Properties**: Determinant can take only 2 values: $\{0, 1\}$.
- **Trace Properties**: $Trace(\text{Idem. Mat.}) = \{0, 1, 2, \dots, n\}$.
- **Eigenvalues**: $\lambda \in \{0, 1\}$.
- **Geometric Interpretation**: Represents a projection operator $P: V \to V$.
- **Rank-Trace Identity**: $Rank(A) = Trace(A)$.
- **Topology**: Closed, defined by $(x^2 - A) = 0$ or $(A^2 - A) = 0$.
- **Boundedness**: Unbounded.
  - Example: $A = \begin{bmatrix} 1 & n \\ 0 & 0 \end{bmatrix}$ (shows it is not bounded as $n \to \infty$).
- **Compactness**: Not Compact (hence no).

## Special Linear Group $SL_n(\mathbb{R})$

- **Definition**: $\{A \in GL_n(\mathbb{R}) : det A = 1\}$.
- **Algebraic Structure**: Subgroup of $GL_n(\mathbb{R})$.
- **Boundedness**: Unbounded.
- **Center**: $Z(SL_n(\mathbb{R})) = \{ \lambda I : \lambda^n = 1 \}$.
- **Topology**: Closed, defined by $det^{-1}(\{1\})$.
- **Connectivity**: Path Connected.
- **Density**: Not dense.

## Orthogonal Matrices $O_n(\mathbb{R})$

- **Definition**: $\{A \in M_n(\mathbb{R}) : AA^T = I\}$.
- **Properties**: Rows and columns form an orthonormal basis for $\mathbb{R}^n$.
- **Topology**: Closed and bounded.
- **Components**: Two connected components ($SO_n$ and $O_n \setminus SO_n$).
- **Center**: $Z(O_n(\mathbb{R})) = \{ \pm I \}$.
- **Compactness**: Compact.
- **Functional Form**: $(AA^T - I)^{-1}(\{0\})$.
- **Connectivity**: Not Connected.
- **Determinant Range**: $det(O_n(\mathbb{R})) = \{1, -1\}$.

## Special Orthogonal Matrices $SO_n(\mathbb{R})$

- **Definition**: $\{A \in O_n(\mathbb{R}) : det A = 1\}$.
- **Common Name**: Called Rotation matrices.
- **Case $n=2$**: Has a specific rotation form.
- **Case $n=3$**: $1$ is an eigenvalue.
- **Eigenvalue Analysis**:
  - If $n$ is odd, $det(A - I) = det(A^T(A - I)) = det(I - A)$.
  - Since $det(I - A) = (-1)^n det(A - I)$, for $n=3$, $det(A - I) = 0$.
  - Therefore, $1$ is an eigenvalue.
  - Except for trivial cases, eigenvalues are complex.
  - If eigenvalues are real, they must be $1$ or $-1$; however, $-1$ is not possible in $SO_n$ for $n=3$ without another $-1$ to keep the determinant $1$.
- **Rotation Axis**: Eigenvector corresponding to the eigenvalue $1$ is the axis of rotation.
- **Fundamental Group**: For $n \ge 3$, $\pi_1(SO_n(\mathbb{R})) \cong \mathbb{Z}_2$ (Doubly connected).
- **Topology**: Path Connected and Compact.

## Unitary Matrices $U_n(\mathbb{C})$

- **Definition**: $\{A \in M_n(\mathbb{C}) : A^*A = I\}$, where $A^*$ is the conjugate transpose.
- **Topology**: They are Compact (closed and bounded in $\mathbb{C}^{n^2}$).
- **Connectivity**: $U_n(\mathbb{C})$ is Connected, unlike $O_n(\mathbb{R})$.
- **Determinant Range**: The determinant is a complex number on the unit circle ($|det A| = 1$).

## Special Unitary Group $SU_n(\mathbb{C})$

- **Definition**: $\{A \in U_n(\mathbb{C}) : det A = 1\}$.
- **Topology**: It is Compact and Simply Connected.
- **Relation to Rotation**: $SU(2)$ is a "double cover" of $SO_3(\mathbb{R})$, meaning they are topologically related but $SU(2)$ has no "holes" (it's simply connected).

## Symmetric Matrices $S_n(\mathbb{R})$

- **Definition**: $\{A \in M_n(\mathbb{R}) : A = A^T\}$.
- **Algebraic Structure**: They form a vector subspace of $M_n(\mathbb{R})$, not a group under multiplication.
- **Topology**: Since it is a subspace, it is Closed, Unbounded, and Connected (specifically, it is homeomorphic to $\mathbb{R}^{n(n+1)/2}$).

## Positive Definite Matrices $P_n$

- **Definition**: Symmetric matrices with all strictly positive eigenvalues ($x^T A x > 0$ for all $x \neq 0$).
- **Topology**: They form an Open Cone within the space of symmetric matrices.
- **Connectivity**: They are Connected and Convex.
- **Closure**: The closure of $P_n$ is the set of positive semi-definite matrices (eigenvalues $\ge 0$), which is a Closed set.

## Hermitian Matrices $H_n(\mathbb{C})$

- **Definition**: $\{A \in M_n(\mathbb{C}) : A = A^*\}$.
- **Key Property**: Like symmetric matrices, all eigenvalues of a Hermitian matrix are real.
- **Topology**: They form a real vector space and are Connected and Closed.
