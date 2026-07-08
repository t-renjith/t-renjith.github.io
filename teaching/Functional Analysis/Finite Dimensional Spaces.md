---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: Finite-Dimensional Normed Spaces
math: true
permalink: /teaching/functional-analysis/finite-dimensional-spaces/
---

In this note, we explore the topological and geometric properties of **finite-dimensional normed spaces**. The entire theory of finite-dimensional normed spaces can be built systematically upon a single, powerful foundational result: the **Linear Independence Lemma**. 

We will first state and prove this lemma, and then use it as our primary tool to prove:
1. **Equivalence of Norms**: All norms on a finite-dimensional vector space are equivalent.
2. **Completeness**: Every finite-dimensional normed space is complete (a Banach space).
3. **Compactness (Heine-Borel)**: A subset is compact if and only if it is closed and bounded.
4. **Riesz's Characterization**: The closed unit ball is compact if and only if the space is finite-dimensional.

---

## 1. The Core Tool: Linear Independence Lemma

The following lemma establishes a lower bound on the norm of a linear combination of linearly independent vectors in terms of the sum of the absolute values of the coefficients. 

### Geometric Intuition
In Euclidean space, a sum of linearly independent vectors cannot "shrink" to zero unless the individual coefficients also shrink to zero. The lemma generalizes this to any normed space: the norm of the sum $\left\| \sum a_i x_i \right\|$ is bounded below by a positive multiple of the sum of the magnitudes of the coefficients $\sum |a_i|$.

### Lemma (Linear Independence Lemma)
Let $\{x_1, \dots, x_n\}$ be a linearly independent set of vectors in a normed space $X$ (of any dimension). Then there exists a constant $c > 0$ such that for any choice of scalars $a_1, \dots, a_n \in \mathbb{K}$ (where $\mathbb{K} = \mathbb{R}$ or $\mathbb{C}$), we have:
$$ \left\| \sum_{i=1}^n a_i x_i \right\| \ge c \sum_{i=1}^n |a_i|. $$

#### Proof
Let $s_n = \sum_{i=1}^n |a_i|$. 
- If $s_n = 0$, then $a_1 = \dots = a_n = 0$, and the inequality holds trivially for any $c > 0$ since $0 \ge 0$.
- If $s_n > 0$, dividing both sides by $s_n$ allows us to normalize the coefficients. Let $b_i = a_i / s_n$, so that:
  $$ \sum_{i=1}^n |b_i| = 1. $$
  In this case, the desired inequality becomes:
  $$ \left\| \sum_{i=1}^n b_i x_i \right\| \ge c. $$
  Hence, it suffices to prove that there exists a constant $c > 0$ such that for all scalars $\{b_i\}_{i=1}^n$ satisfying $\sum_{i=1}^n |b_i| = 1$, we have:
  $$ \left\| \sum_{i=1}^n b_i x_i \right\| \ge c. $$

We proceed by contradiction. Suppose that no such $c > 0$ exists. 
Then, for every $m \in \mathbb{N}$, we can find a sequence of scalars $\{b_i^{(m)}\}_{i=1}^n$ satisfying:
$$ \sum_{i=1}^n \left| b_i^{(m)} \right| = 1 \quad \text{for all } m \in \mathbb{N}, $$
such that:
$$ y_m = \sum_{i=1}^n b_i^{(m)} x_i \quad \text{satisfies} \quad \|y_m\| \to 0 \quad \text{as } m \to \infty. $$

Since $\sum_{i=1}^n |b_i^{(m)}| = 1$, each coordinate coefficient sequence $(b_i^{(m)})_{m=1}^\infty$ is bounded since $|b_i^{(m)}| \le 1$ for all $i \in \{1, \dots, n\}$.
By the classical Bolzano-Weierstrass theorem, any bounded sequence of scalars has a convergent subsequence. We can extract convergent subsequences for each coordinate one by one:
1. **First Coordinate**: Since the sequence of scalars $(b_1^{(m)})_{m=1}^\infty$ is bounded, there exists a subsequence of indices $\{m_{1,k}\}_{k=1}^\infty \subset \mathbb{N}$ and a scalar $\beta_1 \in \mathbb{K}$ such that:
   $$ \lim_{k \to \infty} b_1^{(m_{1,k})} = \beta_1. $$
2. **Second Coordinate**: Consider the subsequence of the second coordinate $(b_2^{(m_{1,k})})_{k=1}^\infty$. Since it is also bounded, we can extract a further subsequence of indices $\{m_{2,k}\}_{k=1}^\infty \subset \{m_{1,k}\}_{k=1}^\infty$ and a scalar $\beta_2 \in \mathbb{K}$ such that:
   $$ \lim_{k \to \infty} b_2^{(m_{2,k})} = \beta_2. $$
   Note that since $\{m_{2,k}\}$ is a subsequence of $\{m_{1,k}\}$, we still have $\lim_{k \to \infty} b_1^{(m_{2,k})} = \beta_1$.
3. **General Coordinate**: Inductively, for each $j = 2, \dots, n$, we extract a subsequence of indices $\{m_{j,k}\}_{k=1}^\infty \subset \{m_{j-1,k}\}_{k=1}^\infty$ such that:
   $$ \lim_{k \to \infty} b_j^{(m_{j,k})} = \beta_j. $$
   At each step, convergence of the previously established coordinates is preserved.

Let the final subsequence of indices be denoted by $\{s_k\}_{k=1}^\infty = \{m_{n,k}\}_{k=1}^\infty$. For this subsequence of vectors:
$$ y_{s_k} = \sum_{i=1}^n b_i^{(s_k)} x_i, $$
we have:
$$ \lim_{k \to \infty} b_i^{(s_k)} = \beta_i \quad \text{for every } i = 1, \dots, n. $$

We define the limit vector:
$$ y = \sum_{i=1}^n \beta_i x_i. $$
By the triangle inequality:
$$ \|y_{s_k} - y\| = \left\| \sum_{i=1}^n \left( b_i^{(s_k)} - \beta_i \right) x_i \right\| \le \sum_{i=1}^n \left| b_i^{(s_k)} - \beta_i \right| \|x_i\|. $$
Since $b_i^{(s_k)} \to \beta_i$ for each $i$ as $k \to \infty$, the right-hand side converges to $0$. Thus, $y_{s_k} \to y$ in norm.
By the continuity of the norm (which follows from the reverse triangle inequality $|\|a\| - \|b\|| \le \|a - b\|$):
$$ \|y\| = \lim_{k \to \infty} \|y_{s_k}\|. $$
Since $\|y_m\| \to 0$ as $m \to \infty$, we must have $\|y_{s_k}\| \to 0$, which implies:
$$ \|y\| = 0 \implies y = 0 \implies \sum_{i=1}^n \beta_i x_i = 0. $$
Because $\{x_1, \dots, x_n\}$ is a linearly independent set, the only linear combination that equals the zero vector is the trivial one. Thus:
$$ \beta_i = 0 \quad \text{for all } i = 1, \dots, n. $$

However, taking the limit as $k \to \infty$ of the normalization condition $\sum_{i=1}^n |b_i^{(s_k)}| = 1$ yields:
$$ \sum_{i=1}^n |\beta_i| = 1. $$
This is a contradiction, since we concluded all $\beta_i = 0$, which would sum to $0$.
Therefore, there must exist some $c > 0$ such that the inequality holds. $\blacksquare$

---

## 2. Application 1: Equivalence of Norms

### Definition & Proposition (Equivalent Norms & Topology)
Two norms $\|\cdot\|_a$ and $\|\cdot\|_b$ on a vector space $X$ are said to be **equivalent** if there exist constants $k, K > 0$ such that:
$$ k \|x\|_a \le \|x\|_b \le K \|x\|_a \quad \text{for all } x \in X. $$

It is straightforward to verify that this defines an equivalence relation on the set of all norms on $X$:
- **Reflexivity**: Taking $k = K = 1$ shows $\|\cdot\|_a$ is equivalent to itself.
- **Symmetry**: If $k \|x\|_a \le \|x\|_b \le K \|x\|_a$, then $\frac{1}{K} \|x\|_b \le \|x\|_a \le \frac{1}{k} \|x\|_b$.
- **Transitivity**: If $\|\cdot\|_a \sim \|\cdot\|_b$ and $\|\cdot\|_b \sim \|\cdot\|_c$, then by combining the inequalities, we get $\|\cdot\|_a \sim \|\cdot\|_c$.

The algebraic definition of norm equivalence perfectly captures topological equivalence, as shown by the following proposition:

### Proposition (Equivalence of Norms and Topology)
Let $\|\cdot\|_a$ and $\|\cdot\|_b$ be two norms on a vector space $X$. The following statements are equivalent:
1. **Algebraic Equivalence**: There exist constants $k, K > 0$ such that $k \|x\|_a \le \|x\|_b \le K \|x\|_a$ for all $x \in X$.
2. **Topological Equivalence**: A subset $U \subset X$ is open under the $\|\cdot\|_a$-induced metric if and only if it is open under the $\|\cdot\|_b$-induced metric. (That is, the induced topologies are identical).
3. **Convergence Equivalence**: A sequence $(x_n)_{n=1}^\infty$ in $X$ converges to $x \in X$ in $(X, \|\cdot\|_a)$ if and only if it converges to $x$ in $(X, \|\cdot\|_b)$.

#### Proof
We will prove the cycle of implications $(1) \implies (2) \implies (3) \implies (1)$.

- **$(1) \implies (2)$**:
  Suppose algebraic equivalence holds. Let $U \subset X$ be open in $(X, \|\cdot\|_a)$. We show $U$ is open in $(X, \|\cdot\|_b)$.
  Let $x_0 \in U$. Since $U$ is open in $(X, \|\cdot\|_a)$, there exists an $a$-ball of radius $\epsilon > 0$ centered at $x_0$ contained in $U$:
  $$ B_a(x_0, \epsilon) = \{x \in X : \|x - x_0\|_a < \epsilon\} \subset U. $$
  We seek a $b$-ball $B_b(x_0, \delta) = \{x \in X : \|x - x_0\|_b < \delta\} \subset U$.
  Using the algebraic equivalence, we have $\|x - x_0\|_a \le \frac{1}{k} \|x - x_0\|_b$.
  If we define $\delta = k\epsilon > 0$, then for any $x \in B_b(x_0, \delta)$, we have:
  $$ \|x - x_0\|_a \le \frac{1}{k} \|x - x_0\|_b < \frac{1}{k} \delta = \epsilon \implies x \in B_a(x_0, \epsilon) \subset U. $$
  Thus, $B_b(x_0, \delta) \subset U$, meaning $U$ is open in $(X, \|\cdot\|_b)$.
  By symmetry, using the inequality $\|x - x_0\|_b \le K \|x - x_0\|_a$ with $\delta = \epsilon/K$, we conclude that any set open in $(X, \|\cdot\|_b)$ is also open in $(X, \|\cdot\|_a)$. Hence, the topologies are identical.

- **$(2) \implies (3)$**:
  Sequence convergence is a topological property defined purely in terms of open sets. A sequence $x_n \to x$ if and only if for every open set $V$ containing $x$, there exists $N \in \mathbb{N}$ such that $x_n \in V$ for all $n \ge N$. Since the topologies are identical, the open sets containing $x$ are identical, and hence convergence and limits are identical in both spaces.

- **$(3) \implies (1)$**:
  We prove the contrapositive. Suppose $(1)$ does not hold. Then either we cannot find $K > 0$ such that $\|x\|_b \le K \|x\|_a$ for all $x$, or we cannot find $k > 0$ such that $\|x\|_b \ge k \|x\|_a$ for all $x$.
  Without loss of generality, assume there is no constant $K > 0$ satisfying $\|x\|_b \le K \|x\|_a$.
  Then, for every $n \in \mathbb{N}$, there exists a vector $z_n \in X$ such that:
  $$ \|z_n\|_b > n \|z_n\|_a. $$
  Clearly $z_n \neq 0$. We define the sequence:
  $$ x_n = \frac{z_n}{n \|z_n\|_a}. $$
  Under the $\|\cdot\|_a$ norm, we have:
  $$ \|x_n\|_a = \frac{\|z_n\|_a}{n \|z_n\|_a} = \frac{1}{n} \to 0 \quad \text{as } n \to \infty. $$
  Thus, $x_n \to 0$ in $(X, \|\cdot\|_a)$.
  However, under the $\|\cdot\|_b$ norm, we have:
  $$ \|x_n\|_b = \frac{\|z_n\|_b}{n \|z_n\|_a} > \frac{n \|z_n\|_a}{n \|z_n\|_a} = 1. $$
  Since $\|x_n\|_b > 1$ for all $n$, the sequence $(x_n)$ cannot converge to $0$ in $(X, \|\cdot\|_b)$.
  This violates the equivalence of convergence, which completes the proof. $\blacksquare$

### Corollary (Cauchy Sequence Equivalence)
If $\|\cdot\|_a$ and $\|\cdot\|_b$ are equivalent norms on $X$, then a sequence $(x_n)$ is Cauchy in $(X, \|\cdot\|_a)$ if and only if it is Cauchy in $(X, \|\cdot\|_b)$.

#### Proof
Let $(x_n)$ be Cauchy in $(X, \|\cdot\|_a)$. For any $\epsilon > 0$, choose $N \in \mathbb{N}$ such that $\|x_n - x_m\|_a < \epsilon/K$ for all $n, m \ge N$. Then:
$$ \|x_n - x_m\|_b \le K \|x_n - x_m\|_a < K \left(\frac{\epsilon}{K}\right) = \epsilon \quad \text{for all } n, m \ge N. $$
Thus, $(x_n)$ is Cauchy in $(X, \|\cdot\|_b)$. The converse follows by symmetry. $\blacksquare$

### Theorem (Equivalence of Norms on Finite-Dimensional Spaces)
On any finite-dimensional vector space $X$, all norms are equivalent.

#### Proof
Let $X$ be an $n$-dimensional vector space with basis $\{e_1, \dots, e_n\}$. For any $x \in X$, write $x = \sum_{i=1}^n \alpha_i e_i$. Define the reference $l^1$-norm on $X$:
$$ \|x\|_1 = \sum_{i=1}^n |\alpha_i|. $$
We will show that any arbitrary norm $\|\cdot\|$ on $X$ is equivalent to $\|\cdot\|_1$:

1. **Upper Bound**: By the triangle inequality and homogeneity of the norm:
   $$ \|x\| = \left\| \sum_{i=1}^n \alpha_i e_i \right\| \le \sum_{i=1}^n |\alpha_i| \|e_i\| \le C \sum_{i=1}^n |\alpha_i| = C \|x\|_1, $$
   where $C = \max_{1 \le i \le n} \|e_i\| > 0$ is a constant.
2. **Lower Bound**: Since $\{e_1, \dots, e_n\}$ is a basis, it is a linearly independent set in the normed space $(X, \|\cdot\|)$. By the Linear Independence Lemma, there exists a constant $c > 0$ such that:
   $$ \|x\| = \left\| \sum_{i=1}^n \alpha_i e_i \right\| \ge c \sum_{i=1}^n |\alpha_i| = c \|x\|_1. $$

Combining these yields $c \|x\|_1 \le \|x\| \le C \|x\|_1$. Since equivalence of norms is transitive, any two arbitrary norms on $X$ must be equivalent to each other. $\blacksquare$

### Examples in $\mathbb{R}^n$
Consider the standard $l^1$, $l^2$ (Euclidean), and $l^\infty$ norms on $\mathbb{R}^n$:
$$ \|x\|_1 = \sum_{i=1}^n |x_i|, \quad \|x\|_2 = \left( \sum_{i=1}^n |x_i|^2 \right)^{1/2}, \quad \|x\|_\infty = \max_{1 \le i \le n} |x_i|. $$
These norms are equivalent, as demonstrated by the following sharp inequalities:
- $\|x\|_\infty \le \|x\|_2 \le \|x\|_1 \le n \|x\|_\infty$
- $\|x\|_2 \le \sqrt{n} \|x\|_\infty$
- $\|x\|_1 \le \sqrt{n} \|x\|_2$ (by the Cauchy-Schwarz inequality)

---

## 3. Application 2: Completeness of Finite-Dimensional Spaces

A complete normed space is called a **Banach space**. In infinite-dimensional spaces, completeness is a rare and prized property. In finite dimensions, completeness is guaranteed.

### Theorem (Completeness)
Every finite-dimensional normed space $X$ is complete.

#### Proof
Let $\{e_1, \dots, e_n\}$ be a basis of $X$. Let $(x^{(k)})_{k=1}^\infty$ be a Cauchy sequence in $X$. Write:
$$ x^{(k)} = \sum_{i=1}^n \alpha_i^{(k)} e_i. $$
By the Linear Independence Lemma, there exists a constant $c > 0$ such that for any $k, m \ge 1$:
$$ \|x^{(k)} - x^{(m)}\| = \left\| \sum_{i=1}^n \left( \alpha_i^{(k)} - \alpha_i^{(m)} \right) e_i \right\| \ge c \sum_{i=1}^n \left| \alpha_i^{(k)} - \alpha_i^{(m)} \right|. $$
Since $(x^{(k)})$ is Cauchy, for any $\epsilon > 0$ there is $N \in \mathbb{N}$ such that $\|x^{(k)} - x^{(m)}\| < c \epsilon$ for all $k, m \ge N$. Thus:
$$ c \sum_{i=1}^n \left| \alpha_i^{(k)} - \alpha_i^{(m)} \right| < c \epsilon \implies \sum_{i=1}^n \left| \alpha_i^{(k)} - \alpha_i^{(m)} \right| < \epsilon \quad \text{for all } k, m \ge N. $$
Consequently, for each coordinate index $i \in \{1, \dots, n\}$, we have:
$$ \left| \alpha_i^{(k)} - \alpha_i^{(m)} \right| < \epsilon \quad \text{for all } k, m \ge N. $$
This shows that for each $i$, the sequence of scalars $(\alpha_i^{(k)})_{k=1}^\infty$ is Cauchy in the scalar field $\mathbb{K}$ ($\mathbb{R}$ or $\mathbb{C}$).
Since the scalar field $\mathbb{K}$ is complete, there exist scalars $\alpha_1, \dots, \alpha_n \in \mathbb{K}$ such that $\lim_{k\to\infty} \alpha_i^{(k)} = \alpha_i$.

We define the limit vector $x = \sum_{i=1}^n \alpha_i e_i \in X$. By the triangle inequality:
$$ \|x^{(k)} - x\| = \left\| \sum_{i=1}^n \left( \alpha_i^{(k)} - \alpha_i \right) e_i \right\| \le \sum_{i=1}^n \left| \alpha_i^{(k)} - \alpha_i \right| \|e_i\|. $$
Since $\alpha_i^{(k)} \to \alpha_i$ for each $i$ as $k \to \infty$, the right-hand side converges to $0$. Thus, $(x^{(k)})$ converges to $x \in X$, showing $(X, \|\cdot\|)$ is complete. $\blacksquare$

### Corollary (Subspaces)
Every finite-dimensional subspace $Y$ of a normed space $X$ is closed in $X$.

#### Proof
Since $Y$ is a finite-dimensional normed space under the norm restricted from $X$, $Y$ is complete by the previous theorem. Because any complete subset of a metric space is closed, $Y$ must be closed in $X$. $\blacksquare$

### Counterexample in Infinite Dimensions
If the subspace is infinite-dimensional, it is **not** necessarily closed.
For example, let $X = C([0,1])$ with the supremum norm $\|f\|_\infty = \sup_{t\in[0,1]} |f(t)|$.
Let $Y = \mathcal{P}([0,1])$ be the subspace of all polynomials on $[0, 1]$. $Y$ is infinite-dimensional.
The sequence of polynomials:
$$ p_k(t) = \sum_{j=0}^k \frac{t^j}{j!} \in Y $$
converges uniformly on $[0, 1]$ to the function $f(t) = e^t$ because it is the Taylor series expansion. Since $e^t$ is continuous, $f \in C([0,1])$. However, $f$ is not a polynomial, so $f \notin Y$.
Thus, $Y$ is not closed in $X$.

---

## 4. Application 3: Compactness (Heine-Borel Theorem)

In general metric spaces, a subset is compact if and only if it is complete and totally bounded. In finite dimensions, this simplifies to the classical Heine-Borel theorem.

### Theorem (Heine-Borel)
Let $X$ be a finite-dimensional normed space. A subset $K \subset X$ is compact if and only if it is closed and bounded.

#### Proof
- **$(\implies)$** Let $K \subset X$ be compact.
  1. **Closed**: In any Hausdorff space (and hence any metric space), compact sets are closed.
  2. **Bounded**: Fix $x_0 \in K$. The open balls $B(x_0, m) = \{x \in X : \|x - x_0\| < m\}$ for $m \in \mathbb{N}$ form an open cover of $K$. Since $K$ is compact, there exists a finite subcover, meaning $K \subset B(x_0, N)$ for some $N \in \mathbb{N}$. Thus, $K$ is bounded.
- **$(\impliedby)$** Let $\{e_1, \dots, e_n\}$ be a basis of $X$. Suppose $K$ is closed and bounded. Let $(y_k)_{k=1}^\infty$ be an arbitrary sequence in $K$. We write:
  $$ y_k = \sum_{i=1}^n \alpha_i^{(k)} e_i. $$
  Since $K$ is bounded, there exists $M > 0$ such that $\|y_k\| \le M$ for all $k \ge 1$.
  By the Linear Independence Lemma, there is a constant $c > 0$ such that:
  $$ M \ge \|y_k\| \ge c \sum_{i=1}^n \left| \alpha_i^{(k)} \right| \ge c \left| \alpha_i^{(k)} \right| \quad \text{for each } i = 1, \dots, n. $$
  Thus, for all $k \ge 1$ and all $i = 1, \dots, n$:
  $$ \left| \alpha_i^{(k)} \right| \le \frac{M}{c}. $$
  The coordinate sequences $(\alpha_i^{(k)})_{k=1}^\infty$ are bounded sequences of scalars. By the Bolzano-Weierstrass theorem, we can extract a subsequence $(y_{k_j})$ of $(y_k)$ (using the same diagonal subsequence extraction technique as in the lemma) such that all its coordinates converge:
  $$ \alpha_i^{(k_j)} \to \alpha_i \quad \text{as } j \to \infty, \quad \text{for } i = 1, \dots, n. $$
  Let $y = \sum_{i=1}^n \alpha_i e_i$. Since:
  $$ \|y_{k_j} - y\| \le \sum_{i=1}^n \left| \alpha_i^{(k_j)} - \alpha_i \right| \|e_i\| \to 0 \quad \text{as } j \to \infty, $$
  the subsequence $(y_{k_j})$ converges to $y$. Since $K$ is closed and all $y_{k_j} \in K$, we have $y \in K$.
  Hence, every sequence in $K$ has a subsequence that converges in $K$. Thus, $K$ is compact. $\blacksquare$

### Counterexample in Infinite Dimensions
In an infinite-dimensional normed space, a closed and bounded set is **not** necessarily compact.
Let $X = l^2$ (the space of square-summable sequences) with the norm $\|x\|_2 = \left( \sum |\xi_i|^2 \right)^{1/2}$.
Consider the set of standard basis vectors $K = \{e_1, e_2, e_3, \dots\}$, where $e_k$ has $1$ at the $k$-th position and $0$ elsewhere.
1. **Bounded**: $\|e_k\|_2 = 1$ for all $k$, so $K$ is bounded.
2. **Closed**: For any $j \ne k$, the distance is:
   $$ \|e_j - e_k\|_2 = \sqrt{1^2 + 1^2} = \sqrt{2}. $$
   Since the distance between any two distinct points in $K$ is $\sqrt{2}$, $K$ has no limit points. Thus, it contains all its limit points vacuously and is closed.
3. **Non-compact**: The sequence $(e_k)_{k=1}^\infty$ in $K$ cannot have any convergent subsequence because for any subsequence, the distance between any two distinct terms is $\sqrt{2}$, which prevents it from being Cauchy.
Thus, $K$ is a closed and bounded set that is not compact.

---

## 5. Riesz's Lemma

Riesz's Lemma allows us to find a unit vector that is "almost orthogonal" to any proper closed subspace.

### Theorem (Riesz's Lemma)
Let $X$ be a normed space, and let $Y$ be a proper closed subspace of $X$. Then for any $\theta \in (0, 1)$, there exists a vector $x_\theta \in X$ such that:
1. $\|x_\theta\| = 1$,
2. $\|x_\theta - y\| \ge \theta$ for all $y \in Y$.

#### Proof
Since $Y$ is a proper closed subspace, choose $x_0 \in X \setminus Y$. The distance $d = \inf_{y \in Y} \|x_0 - y\| > 0$ because $Y$ is closed and $x_0 \notin Y$.
For a given $\theta \in (0, 1)$, we have $1/\theta > 1$, which implies $d/\theta > d$. Thus, there exists some $\epsilon > 0$ such that:
$$ d + \epsilon = \frac{d}{\theta}. $$
By the definition of the infimum, there must exist $y_0 \in Y$ such that:
$$ \|x_0 - y_0\| < d + \epsilon = \frac{d}{\theta}. $$
Define:
$$ x_\theta = \frac{x_0 - y_0}{\|x_0 - y_0\|}. $$
Clearly, $\|x_\theta\| = 1$. For any $y \in Y$, we compute:
$$ \|x_\theta - y\| = \left\| \frac{x_0 - y_0}{\|x_0 - y_0\|} - y \right\| = \frac{1}{\|x_0 - y_0\|} \| x_0 - (y_0 + \|x_0 - y_0\| y) \|. $$
Since $Y$ is a subspace and $y_0, y \in Y$, the vector $y' = y_0 + \|x_0 - y_0\| y$ is in $Y$. 
By the definition of $d$, we have $\|x_0 - y'\| \ge d$.
Using this bound, we obtain:
$$ \|x_\theta - y\| \ge \frac{d}{\|x_0 - y_0\|} > \frac{d}{d/\theta} = \theta. \quad \blacksquare $$

### Why is $\theta \in (0, 1)$ needed?
Can we choose $\theta = 1$? In general infinite-dimensional normed spaces, **no**. We cannot always find a unit vector that is at distance exactly $1$ from a closed subspace.

#### Counterexample for $\theta = 1$
Let $X = \{ f \in C([0,1]) : f(0) = 0 \}$ with the supremum norm $\|f\|_\infty = \sup_{t\in[0,1]} |f(t)|$.
Let $Y$ be the proper closed subspace of $X$ defined by:
$$ Y = \left\{ f \in X : \int_0^1 f(t) dt = 0 \right\}. $$
Consider the vector $x_0(t) = t \in X \setminus Y$. Let's compute the distance $d(x_0, Y) = \inf_{g \in Y} \|x_0 - g\|_\infty$.
For any $g \in Y$, we have:
$$ \frac{1}{2} = \left| \int_0^1 (t - g(t)) dt \right| \le \int_0^1 |t - g(t)| dt. $$
Since $t - g(t)$ is continuous, vanishes at $0$, and has a non-zero integral, it cannot be a constant function. Thus, we have a strict inequality:
$$ \int_0^1 |t - g(t)| dt < \|t - g\|_\infty. $$
This implies that for all $g \in Y$:
$$ \|x_0 - g\|_\infty > \frac{1}{2} \implies d(x_0, Y) \ge \frac{1}{2}. $$
By defining a sequence of functions $f_n(t) = t - g_n(t)$ that rise sharply from $0$ to $1/2$ on $[0, 1/n]$ and then stay slightly above $1/2$ to make their integral exactly $1/2$, we can show that $\inf_{g \in Y} \|x_0 - g\|_\infty = 1/2$. However, as shown above, this infimum is never attained.

Now, suppose there existed a unit vector $x \in X$ (so $\|x\|_\infty = 1$) such that $d(x, Y) = 1$.
Since $Y$ has codimension $1$ in $X$, any vector $x \in X$ can be written as $x = \lambda x_0 + g_0$ for some $\lambda \in \mathbb{K}$ and $g_0 \in Y$.
Since $d(x, Y) = 1$:
$$ 1 = d(\lambda x_0 + g_0, Y) = |\lambda| d(x_0, Y) = \frac{|\lambda|}{2} \implies |\lambda| = 2. $$
However, we also have $\|x\|_\infty = 1$:
$$ 1 = \left\| \lambda x_0 + g_0 \right\|_\infty = 2 \left\| x_0 + \frac{g_0}{\lambda} \right\|_\infty. $$
Since $-\frac{g_0}{\lambda} \in Y$, by the fact that the infimum is never attained, we must have:
$$ \left\| x_0 - \left(-\frac{g_0}{\lambda}\right) \right\|_\infty > d(x_0, Y) = \frac{1}{2}. $$
This implies:
$$ 1 = 2 \left\| x_0 + \frac{g_0}{\lambda} \right\|_\infty > 2 \cdot \frac{1}{2} = 1, $$
which is a contradiction ($1 > 1$). 
Thus, there does not exist any $x \in X$ with $\|x\|_\infty = 1$ such that $d(x, Y) = 1$.

---

## 6. Riesz's Characterization of Finite-Dimensional Spaces

The compactness of the closed unit ball uniquely distinguishes finite-dimensional spaces from infinite-dimensional ones.

### Theorem (Compact Unit Ball)
Let $X$ be a normed space. The closed unit ball $B_X = \{ x \in X : \|x\| \le 1 \}$ is compact if and only if $X$ is finite-dimensional.

#### Proof
- **$(\impliedby)$** If $X$ is finite-dimensional, $B_X$ is closed and bounded. By the Heine-Borel theorem (Section 4), $B_X$ is compact.
- **$(\implies)$** Suppose $B_X$ is compact, but $X$ is infinite-dimensional.
  1. Pick $x_1 \in X$ with $\|x_1\| = 1$. Let $Y_1 = \text{span}\{x_1\}$. Since $Y_1$ is finite-dimensional, it is closed (Section 3 Corollary) and proper (since $X$ is infinite-dimensional).
  2. By Riesz's Lemma with $\theta = 1/2$, there exists $x_2 \in X$ with $\|x_2\| = 1$ such that:
     $$ d(x_2, Y_1) \ge \frac{1}{2} \implies \|x_2 - x_1\| \ge \frac{1}{2}. $$
  3. Let $Y_2 = \text{span}\{x_1, x_2\}$. As a finite-dimensional subspace, $Y_2$ is closed and proper. By Riesz's Lemma with $\theta = 1/2$, there exists $x_3 \in X$ with $\|x_3\| = 1$ such that:
     $$ d(x_3, Y_2) \ge \frac{1}{2} \implies \|x_3 - x_1\| \ge \frac{1}{2} \text{ and } \|x_3 - x_2\| \ge \frac{1}{2}. $$
  4. Inductively, suppose we have chosen $x_1, \dots, x_k$ of norm $1$ such that $\|x_i - x_j\| \ge 1/2$ for all $1 \le j < i \le k$. We define the finite-dimensional subspace:
     $$ Y_k = \text{span}\{x_1, \dots, x_k\}. $$
     Since $Y_k$ is finite-dimensional, it is closed and proper. By Riesz's Lemma with $\theta = 1/2$, there exists $x_{k+1} \in X$ with $\|x_{k+1}\| = 1$ such that:
     $$ d(x_{k+1}, Y_k) \ge \frac{1}{2} \implies \|x_{k+1} - x_j\| \ge \frac{1}{2} \quad \text{for all } j = 1, \dots, k. $$
  
  Through this inductive construction, we obtain an infinite sequence $(x_n)_{n=1}^\infty$ in $B_X$ such that:
  $$ \|x_n\| = 1 \text{ for all } n \in \mathbb{N}, \quad \text{and} \quad \|x_n - x_m\| \ge \frac{1}{2} \text{ for all } n \ne m. $$
  
  Since the distance between any two distinct terms is at least $1/2$, $(x_n)$ cannot have any Cauchy subsequence, and thus no convergent subsequence. This contradicts the hypothesis that the closed unit ball $B_X$ is compact.
  
  Thus, $X$ must be finite-dimensional. $\blacksquare$

---

## 7. Exercises

Here are some essential exercise questions to test your understanding of finite-dimensional normed spaces, along with hints for solving them.

### Exercise 1 (Comparison of Norms on $C([0,1])$)
Let $X = C([0,1])$ be the vector space of all continuous functions on $[0,1]$. Define the supremum norm $\|f\|_\infty = \sup_{t \in [0,1]} |f(t)|$ and the integral norm $\|f\|_1 = \int_0^1 |f(t)| dt$.
1. Prove that $\|f\|_1 \le \|f\|_\infty$ for all $f \in X$.
2. Prove that these two norms are **not** equivalent.
3. Why does this not contradict the theorem that all norms on a finite-dimensional space are equivalent?

> **Hint**: For part (2), construct a sequence of functions $f_n(t) = t^n \in X$ for $n \in \mathbb{N}$. Show that $\|f_n\|_\infty = 1$ for all $n$, but $\|f_n\|_1 = \frac{1}{n+1} \to 0$ as $n \to \infty$. If the norms were equivalent, we would have $\|f_n\|_\infty \le C \|f_n\|_1$, which fails as $n \to \infty$. For part (3), note that $C([0,1])$ is infinite-dimensional.

### Exercise 2 (Non-Equivalence of Norms in Infinite Dimensions)
Show that on any infinite-dimensional vector space $X$, one can always construct two norms that are **not** equivalent.

> **Hint**: Let $\{e_i\}_{i \in I}$ be a Hamel basis of $X$. Since $X$ is infinite-dimensional, we can choose a countably infinite subset $\{e_1, e_2, e_3, \dots\} \subset \{e_i\}_{i \in I}$. Define two norms:
> $$ \|x\|_a = \sum |c_i| \quad \text{and} \quad \|x\|_b = \sum i |c_i|, $$
> where $x = \sum c_i e_i$ (note that all but finitely many $c_i$ are zero). Consider the sequence of vectors $x_n = e_n$, and show that no constant $K > 0$ can satisfy $\|x_n\|_b \le K \|x_n\|_a$ for all $n \in \mathbb{N}$.

### Exercise 3 (Equivalence of Norms and Topology Preservation)
Let $\|\cdot\|_a$ and $\|\cdot\|_b$ be equivalent norms on a vector space $X$. Prove directly from the definitions that:
1. A subset $K \subset X$ is compact in $(X, \|\cdot\|_a)$ if and only if it is compact in $(X, \|\cdot\|_b)$.
2. The space $(X, \|\cdot\|_a)$ is complete (a Banach space) if and only if $(X, \|\cdot\|_b)$ is complete.

> **Hint**: For part (1), let $(y_n)$ be a sequence in $K$. Compactness in $(X, \|\cdot\|_a)$ implies $(y_n)$ has a subsequence converging in $K$ under $\|\cdot\|_a$. Use the convergence equivalence proposition to conclude that this same subsequence converges to the same limit under $\|\cdot\|_b$. For part (2), use the Cauchy Sequence Equivalence corollary.

### Exercise 4 (Distance to Subspaces)
Let $Y$ be a finite-dimensional subspace of a normed space $X$. For any $x_0 \in X \setminus Y$, prove that the distance $d(x_0, Y)$ is achieved. That is, show there exists a vector $y_0 \in Y$ such that:
$$ \|x_0 - y_0\| = d(x_0, Y). $$

> **Hint**: Let $d = d(x_0, Y) = \inf_{y \in Y} \|x_0 - y\|$. By definition of the infimum, there is a sequence $(y_n)$ in $Y$ such that $\|x_0 - y_n\| \to d$. Show that $(y_n)$ is a bounded sequence in $Y$. Since $Y$ is finite-dimensional, apply the Heine-Borel theorem to extract a convergent subsequence $y_{n_k} \to y_0 \in Y$, and show $\|x_0 - y_0\| = d$ using the continuity of the norm.

### Exercise 5 (Detailed Calculations for Riesz's Lemma Counterexample)
Carry out the full calculations for the counterexample in Section 5. Specifically, show that for $x_0(t) = t$ and $Y = \{ f \in C([0,1]) : f(0) = 0, \int_0^1 f(t) dt = 0 \}$, we have:
1. $Y$ is a proper closed subspace of codimension 1.
2. $d(x_0, Y) = 1/2$.
3. For any $g \in Y$, $\|x_0 - g\|_\infty > 1/2$.
4. No unit vector $x \in X$ satisfies $d(x, Y) = 1$.

> **Hint**: Follow the step-by-step reasoning in Section 5. For part (3), show that if $\|x_0 - g\|_\infty = 1/2$, then $t - g(t)$ must be identically equal to either $1/2$ or $-1/2$ almost everywhere to satisfy the integral condition, which contradicts $g(0) = 0$. For part (4), write $x = \lambda x_0 + g_0$ and prove that $\|x\|_\infty = 1 \implies |\lambda| < 2 \implies d(x, Y) < 1$.


