---
layout: pages
eleventyComputed:
  title: 'Teaching | {{ metadata.author.name }}'
page_title: The Weierstrass Counterexample to Dirichlet's Principle
math: true
permalink: /teaching/Notes/weierstrass-counterexample/
---

## 1. Introduction: The Dirichlet Problem and 19th-Century Physics

In the mid-19th century, few mathematical ideas were as celebrated or seemed as physically unassailable as **Dirichlet's Principle**.

The problem at the center of this story is the classical **Dirichlet boundary value problem for Laplace's equation**. Let $\Omega \subset \mathbb{R}^n$ (typically $n = 2$ or $n = 3$) be a bounded domain with smooth boundary $\partial \Omega$. Given a continuous boundary function $g : \partial \Omega \to \mathbb{R}$, we seek a function $u : \overline{\Omega} \to \mathbb{R}$ satisfying:

$$
\begin{cases}
\Delta u = \sum_{i=1}^n \frac{\partial^2 u}{\partial x_i^2} = 0 & \text{in } \Omega, \\
u = g & \text{on } \partial \Omega.
\end{cases}
$$

Solutions to Laplace's equation are called **harmonic functions**. They describe fundamental physical phenomena in equilibrium:
- **Electrostatics**: The electric potential $u$ in a charge-free region $\Omega$ with fixed potential $g$ on the conducting boundary.
- **Thermodynamics**: The steady-state temperature distribution $u$ within a solid whose surface temperature is maintained at $g$.
- **Fluid Mechanics**: The velocity potential of an incompressible, irrotational fluid.
- **Elasticity**: The equilibrium displacement of a flexible membrane (e.g., a soap film) stretched over a wire boundary curve $g$.

```
         Fixed boundary potential: u = g(x) on ∂Ω
                     ╭────────────────╮
                    ╱   Δu = 0 in Ω   ╲
                   │  (Harmonic State) │
                    ╲                 ╱
                     ╰────────────────╯
            Minimizes Total Dirichlet Energy:
                D[u] = ∫_Ω |∇u|² dx
```

---

## 2. Dirichlet's Principle: Riemann's Foundation

### The Variational Insight

In physics, equilibrium states correspond to states of **minimal potential energy**.

For any continuously differentiable function $v : \overline{\Omega} \to \mathbb{R}$, define the **Dirichlet Integral** (or Dirichlet Energy):

$$
D[v] = \int_{\Omega} |\nabla v|^2 \, dx = \int_{\Omega} \left( \left(\frac{\partial v}{\partial x_1}\right)^2 + \cdots + \left(\frac{\partial v}{\partial x_n}\right)^2 \right) dx
$$

Now consider the class of admissible candidate functions satisfying the given boundary values:

$$
\mathcal{A} = \left\{ v \in C^2(\Omega) \cap C(\overline{\Omega}) : v|_{\partial \Omega} = g \right\}
$$

Suppose $u \in \mathcal{A}$ is a minimizer of $D[v]$ on $\mathcal{A}$. Let $\phi \in C_c^\infty(\Omega)$ be any smooth test function vanishing on $\partial \Omega$. For any small scalar $\varepsilon \in \mathbb{R}$, the perturbed function $u + \varepsilon \phi$ is also in $\mathcal{A}$.

Define the single-variable function $\Phi(\varepsilon) = D[u + \varepsilon \phi]$:

$$
\Phi(\varepsilon) = \int_\Omega |\nabla u + \varepsilon \nabla \phi|^2 \, dx = D[u] + 2\varepsilon \int_\Omega \nabla u \cdot \nabla \phi \, dx + \varepsilon^2 \int_\Omega |\nabla \phi|^2 \, dx
$$

Since $u$ minimizes $D$, the function $\Phi(\varepsilon)$ must have a local minimum at $\varepsilon = 0$. Setting the first variation to zero:

$$
\Phi'(0) = \left. \frac{d}{d\varepsilon} \right|_{\varepsilon = 0} D[u + \varepsilon \phi] = 2 \int_\Omega \nabla u \cdot \nabla \phi \, dx = 0
$$

Applying Green's first identity (integration by parts) and using the fact that $\phi = 0$ on $\partial \Omega$:

$$
\int_\Omega \nabla u \cdot \nabla \phi \, dx = -\int_\Omega (\Delta u) \phi \, dx = 0
$$

Since this must hold for *every* test function $\phi \in C_c^\infty(\Omega)$, the fundamental lemma of the calculus of variations forces:

$$
\Delta u = 0 \quad \text{in } \Omega
$$

Thus, **any minimizer of the Dirichlet integral is automatically a harmonic function solving the boundary value problem!**

---

### The Fatal Assumption

The early pioneers of potential theory—notably **George Green (1828)**, **William Thomson (Lord Kelvin, 1847)**, and **Peter Gustav Lejeune Dirichlet** (in lectures in Göttingen in the 1850s)—reversed this logical implication.

They argued as follows:
1. The integrand $|\nabla v|^2$ is everywhere non-negative, so $D[v] \ge 0$ for all $v \in \mathcal{A}$.
2. The set of real numbers $\{ D[v] : v \in \mathcal{A} \}$ is bounded below by zero.
3. Therefore, this set has a well-defined greatest lower bound (infimum):
   $$
   d = \inf_{v \in \mathcal{A}} D[v] \ge 0
   $$
4. **The Unexamined Leap**: *Because the lower bound $d$ exists, there must exist a function $u \in \mathcal{A}$ that actually achieves this minimum value, $D[u] = d$.*
5. By the variational calculation above, this minimizer $u$ satisfies $\Delta u = 0$ with $u|_{\partial \Omega} = g$.
6. Hence, a solution to Laplace's equation always exists!

### Riemann's Triumphs Built on Quicksand

In 1851, a brilliant young student of Gauss and Dirichlet, **Bernhard Riemann**, submitted his doctoral dissertation (*Grundlagen für eine allgemeine Theorie der Functionen einer veränderlichen complexen Grösse*). In it, Riemann christened this argument **Dirichlet's Principle** (*Dirichletsches Princip*).

Riemann recognized that Dirichlet's Principle was the master key to complex analysis:
- A complex analytic function $f(z) = u(x,y) + i v(x,y)$ has harmonic real and imaginary components satisfying the Cauchy-Riemann equations.
- To construct holomorphic mappings, conformal transformations, and meromorphic differentials on topological surfaces (**Riemann surfaces**), Riemann routinely invoked Dirichlet's Principle to produce harmonic functions with specified boundary values, branch cuts, and logarithmic singularities.
- He used it to prove the **Riemann Mapping Theorem (1851)** and the existence of Abelian differentials in algebraic geometry (1857).

To Riemann and his contemporaries, physical intuition was a guarantor of mathematical truth: an electric field *always* settles into an equilibrium; therefore, the minimizer *must* exist.

```
       Physical Analogy (1850s)                   Mathematical Reality
┌─────────────────────────────────────┐   ┌─────────────────────────────────────┐
│ "A soap film stretched across a     │   │ In infinite-dimensional function    │
│ wire loop will physically assume    │ ≠ │ spaces, bounded sets are NOT        │
│ the configuration of least energy;  │   │ compact. An infimum of energy need  │
│ therefore the math must work."      │   │ NOT be attained by any function!    │
└─────────────────────────────────────┘   └─────────────────────────────────────┘
```

---

## 3. The Shock of 1870: Weierstrass's Counterexample

On **July 14, 1870**, Karl Weierstrass delivered an address before the Royal Prussian Academy of Sciences in Berlin titled:

> **"Über das sogenannte Dirichlet'sche Princip"** (*On the So-Called Dirichlet Principle*)

In this short, devastating paper, Weierstrass dismantled the foundation of Riemann's edifice. He demonstrated that Dirichlet's Principle rested on a elementary logical fallacy:

> **The existence of an infimum does not imply the existence of a minimum.**

In the finite-dimensional case $\mathbb{R}$, the set $S = (0, 1)$ is bounded below and has infimum $\inf S = 0$, yet no element of $S$ attains the value $0$. In finite dimensions, the Extreme Value Theorem saves optimization if the domain is closed and bounded (compact). But in infinite-dimensional function spaces, closed and bounded sets are **never compact in the norm topology**. A sequence of functions can easily "escape" the space.

To prove that this failure is fatal in the calculus of variations, Weierstrass constructed an explicit, concrete one-dimensional variational problem.

---

### The Classical Weierstrass Construction

Consider the open interval $\Omega = (-1, 1)$. We seek to minimize the variational integral:

$$
J[y] = \int_{-1}^{1} x^2 \left( y'(x) \right)^2 dx
$$

over the space of continuously differentiable admissible functions:

$$
\mathcal{A} = \left\{ y \in C^1([-1, 1]) : y(-1) = a, \; y(1) = b \right\} \quad \text{with } a \neq b
$$

For concreteness and symmetry, let $a = -1$ and $b = 1$:

$$
\mathcal{A} = \left\{ y \in C^1([-1, 1]) : y(-1) = -1, \; y(1) = 1 \right\}
$$

```
   y(x)
    1 ┼                                    ╭─── y(1) = 1
      │                                   ╱
      │                                  │
    0 ┼──────────────────────────────────┼─────── x
      │                                  │
      │                                 ╱
   -1 ┼─── y(-1) = -1                  ╯
     -1                                0        1
```

---

### Step 1: The Infimum is Non-Negative

For every $x \in [-1, 1]$ and any $y \in \mathcal{A}$, the integrand is a square of real quantities:

$$
x^2 (y'(x))^2 \ge 0 \implies J[y] = \int_{-1}^1 x^2 (y'(x))^2 dx \ge 0
$$

Because the set $\{ J[y] : y \in \mathcal{A} \}$ is bounded below by zero, its infimum exists and satisfies:

$$
d = \inf_{y \in \mathcal{A}} J[y] \ge 0
$$

---

### Step 2: The Value Zero is Never Attained

Could there exist a function $y_0 \in \mathcal{A}$ such that $J[y_0] = 0$?

**Theorem**: *No admissible function can achieve $J[y] = 0$.*

**Proof**:
Suppose $y \in C^1([-1, 1])$ satisfies $J[y] = 0$. Since the integrand $f(x) = x^2 (y'(x))^2$ is continuous and non-negative on $[-1, 1]$, its integral on $[-1, 1]$ can vanish if and only if the integrand vanishes identically:

$$
x^2 (y'(x))^2 = 0 \quad \text{for all } x \in [-1, 1]
$$

For every $x \neq 0$, $x^2 > 0$, which immediately implies:

$$
y'(x) = 0 \quad \text{for all } x \in [-1, 0) \cup (0, 1]
$$

Since $y \in C^1([-1, 1])$, the derivative $y'$ is continuous on all of $[-1, 1]$, including at $x = 0$. By continuity:

$$
y'(0) = \lim_{x \to 0} y'(x) = 0
$$

Therefore, $y'(x) = 0$ on the entire interval $[-1, 1]$.

By the Mean Value Theorem, any function on an interval with zero derivative everywhere is identically constant:

$$
y(x) = C \quad \text{for all } x \in [-1, 1]
$$

Evaluating at the endpoints:

$$
y(-1) = C \quad \text{and} \quad y(1) = C \implies y(-1) = y(1)
$$

However, the boundary conditions require $y(-1) = -1$ and $y(1) = 1$. Since $-1 \neq 1$, this is an absolute contradiction!

**Conclusion**: For every function $y \in \mathcal{A}$:

$$
J[y] > 0
$$

$\blacksquare$

---

### Step 3: The Infimum is Exactly Zero ($\inf_{y \in \mathcal{A}} J[y] = 0$)

While no function in $\mathcal{A}$ can yield $J[y] = 0$, Weierstrass proved that the infimum is nevertheless **precisely zero**.

To do this, he constructed an explicit **minimizing sequence** of admissible functions $\{ y_\varepsilon \}_{\varepsilon > 0} \subset \mathcal{A}$ such that:

$$
\lim_{\varepsilon \to 0^+} J[y_\varepsilon] = 0
$$

#### The Construction

For each parameter $\varepsilon > 0$, define the function:

$$
y_\varepsilon(x) = \frac{\arctan\left(\frac{x}{\varepsilon}\right)}{\arctan\left(\frac{1}{\varepsilon}\right)}
$$

Let us verify that $y_\varepsilon$ satisfies all requirements of admissibility:

1. **Boundary Conditions**:
   $$
   y_\varepsilon(1) = \frac{\arctan(1/\varepsilon)}{\arctan(1/\varepsilon)} = 1, \quad y_\varepsilon(-1) = \frac{\arctan(-1/\varepsilon)}{\arctan(1/\varepsilon)} = \frac{-\arctan(1/\varepsilon)}{\arctan(1/\varepsilon)} = -1
   $$
2. **Smoothness**:
   Because $\varepsilon > 0$, the function $\frac{x}{\varepsilon}$ is infinitely differentiable on $[-1, 1]$. Since $\arctan(t)$ is smooth on $\mathbb{R}$, $y_\varepsilon \in C^\infty([-1, 1]) \subset C^1([-1, 1])$.

Thus, $y_\varepsilon \in \mathcal{A}$ for every $\varepsilon > 0$.

```
   y_ε(x)
    1 ┼                                           ╭──── ε = 0.5 (gentle transition)
      │                                          ╱
      │                       ╭─────────────────╯────── ε = 0.05 (steep transition)
    0 ┼───────────────────────┼──────────────────────── x
      │                ╭──────╯
      │               ╱
   -1 ┼──────────────╯
     -1                       0                        1
```

#### Computing the Derivative

Differentiating $y_\varepsilon(x)$ with respect to $x$:

$$
y'_\varepsilon(x) = \frac{1}{\arctan(1/\varepsilon)} \cdot \frac{d}{dx} \left[ \arctan\left(\frac{x}{\varepsilon}\right) \right] = \frac{1}{\arctan(1/\varepsilon)} \cdot \frac{1/\varepsilon}{1 + (x/\varepsilon)^2} = \frac{1}{\arctan(1/\varepsilon)} \cdot \frac{\varepsilon}{\varepsilon^2 + x^2}
$$

#### Computing the Energy Integral

Now substitute $y'_\varepsilon(x)$ into the functional $J$:

$$
J[y_\varepsilon] = \int_{-1}^1 x^2 \left( y'_\varepsilon(x) \right)^2 dx = \frac{\varepsilon^2}{\arctan^2(1/\varepsilon)} \int_{-1}^1 \frac{x^2}{(\varepsilon^2 + x^2)^2} \, dx
$$

Because the integrand is an even function of $x$:

$$
\int_{-1}^1 \frac{x^2}{(\varepsilon^2 + x^2)^2} \, dx = 2 \int_0^1 \frac{x^2}{(\varepsilon^2 + x^2)^2} \, dx
$$

Make the substitution $x = \varepsilon t$, so $dx = \varepsilon dt$:
- When $x = 0$, $t = 0$.
- When $x = 1$, $t = 1/\varepsilon$.

The integral transforms as:

$$
\int_0^1 \frac{x^2}{(\varepsilon^2 + x^2)^2} \, dx = \int_0^{1/\varepsilon} \frac{\varepsilon^2 t^2}{\left(\varepsilon^2 + \varepsilon^2 t^2\right)^2} \cdot \varepsilon dt = \int_0^{1/\varepsilon} \frac{\varepsilon^3 t^2}{\varepsilon^4 (1+t^2)^2} \, dt = \frac{1}{\varepsilon} \int_0^{1/\varepsilon} \frac{t^2}{(1+t^2)^2} \, dt
$$

Substituting this back into $J[y_\varepsilon]$:

$$
J[y_\varepsilon] = \frac{\varepsilon^2}{\arctan^2(1/\varepsilon)} \cdot \frac{2}{\varepsilon} \int_0^{1/\varepsilon} \frac{t^2}{(1+t^2)^2} \, dt = \frac{2\varepsilon}{\arctan^2(1/\varepsilon)} \int_0^{1/\varepsilon} \frac{t^2}{(1+t^2)^2} \, dt
$$

#### Evaluating the Limit as $\varepsilon \to 0^+$

We evaluate each factor as $\varepsilon \to 0^+$:

1. The denominator approaches:
   $$
   \lim_{\varepsilon \to 0^+} \arctan(1/\varepsilon) = \arctan(+\infty) = \frac{\pi}{2} \implies \arctan^2(1/\varepsilon) \to \frac{\pi^2}{4}
   $$

2. The integral over $t$ converges to a finite improper integral:
   $$
   \int_0^\infty \frac{t^2}{(1+t^2)^2} \, dt
   $$
   Using integration by parts with $u = t$ and $dv = \frac{t}{(1+t^2)^2} dt$ (so $v = -\frac{1}{2(1+t^2)}$):
   $$
   \begin{aligned}
   \int_0^\infty \frac{t^2}{(1+t^2)^2} \, dt &= \left[ -\frac{t}{2(1+t^2)} \right]_0^\infty + \frac{1}{2} \int_0^\infty \frac{1}{1+t^2} \, dt \\
   &= (0 - 0) + \frac{1}{2} \left[ \arctan(t) \right]_0^\infty \\
   &= \frac{1}{2} \cdot \frac{\pi}{2} = \frac{\pi}{4}
   \end{aligned}
   $$

Therefore:

$$
\lim_{\varepsilon \to 0^+} \int_0^{1/\varepsilon} \frac{t^2}{(1+t^2)^2} \, dt = \frac{\pi}{4}
$$

3. Combining everything:

$$
\lim_{\varepsilon \to 0^+} J[y_\varepsilon] = \lim_{\varepsilon \to 0^+} \frac{2\varepsilon}{\left(\frac{\pi}{2}\right)^2} \cdot \frac{\pi}{4} = \lim_{\varepsilon \to 0^+} \left( \frac{2}{\pi} \varepsilon \right) = 0
$$

Since $J[y_\varepsilon] > 0$ for all $\varepsilon > 0$ and $J[y_\varepsilon] \to 0$ as $\varepsilon \to 0^+$:

$$
\inf_{y \in \mathcal{A}} J[y] = 0
$$

Yet there is **no function** in $\mathcal{A}$ where $J[y] = 0$.

**The infimum exists, but the minimum does not exist.** Dirichlet's principle is completely invalid as a general mathematical rule! $\blacksquare$

---

## 4. The Analytical Mechanism: Why Did It Fail?

Why did this minimizing sequence fail to attain a minimum within the admissible class $C^1([-1, 1])$?

### Degeneration to a Discontinuous Limit

Let us examine the pointwise limit of the minimizing sequence $y_\varepsilon(x)$ as $\varepsilon \to 0^+$:

$$
\lim_{\varepsilon \to 0^+} y_\varepsilon(x) = \lim_{\varepsilon \to 0^+} \frac{\arctan(x/\varepsilon)}{\arctan(1/\varepsilon)} = \begin{cases}
-1 & \text{if } x < 0, \\
0 & \text{if } x = 0, \\
+1 & \text{if } x > 0.
\end{cases} = \operatorname{sgn}(x)
$$

```
   y_∞(x) = sgn(x)
    1 ┼                          o━━━━━━━━━━━━━━━━
      │                          │
    0 ┼──────────────────────────●──────────────── x
      │                          │
   -1 ┼━━━━━━━━━━━━━━━━━━━━━━━━━o
     -1                          0               1
             Discontinuity (Jump = 2) at x = 0!
```

The pointwise limit of our smooth functions is the **signum step function** $\operatorname{sgn}(x)$!

Notice what happened:
1. The weighting coefficient $x^2$ in the functional $J[y] = \int_{-1}^1 x^2 (y')^2 dx$ **vanishes at $x = 0$**.
2. This means that having a huge derivative $y'(x)$ costs very little energy as long as that derivative is concentrated in an infinitesimal neighborhood of $x = 0$.
3. The minimizing sequence exploits this loophole: to transition from $-1$ to $+1$, it makes the derivative arbitrarily steep ($y'_\varepsilon(0) \sim 1/\varepsilon \to \infty$), squeezing all the transition into a window of width $\varepsilon$ around $x = 0$.
4. In the limit, the derivative blows up into a Dirac delta distribution $2\delta(0)$, and the function develops a **jump discontinuity of height 2**.
5. The limit function does not belong to $C^1([-1, 1])$, nor even to $C^0([-1, 1])$.

The sequence was "trying" to minimize energy, but to do so, it was forced to **escape the function space entirely**!

---

## 5. The Crisis and the Thirty-Year Interregnum

Weierstrass's 1870 paper caused panic in the mathematical community. Riemann had died of tuberculosis in 1866 at the age of 39, leaving no one capable of directly defending his proofs.

### The Reaction of the Mathematical World

In his lectures on the development of 19th-century mathematics, **Felix Klein** described the atmosphere:

> *"Riemann's theory of functions was regarded with great suspicion. Weierstrass's critique was accepted by the majority of mathematicians as decisive. Riemann's brilliant results were left hanging in the air without rigorous foundation."*

Mathematicians split into ideological camps:
- **The Berlin School (Weierstrass, Kronecker)**: Demanded absolute arithmetic and logical rigor. Leopold Kronecker went so far as to reject Riemann's work entirely as mystical nonsense lacking mathematical reality.
- **The Göttingen / Geometric School (Klein)**: Maintained that Riemann's theorems had to be true because of physical intuition. Klein famously argued that an electrical engineer measuring potentials on a conductive surface would have no doubt that a solution existed, and that mathematics must eventually catch up with physics.

---

### Alternative Rescues (1870–1890)

For three decades, mathematicians abandoned the variational approach and scrambled to find alternative, constructive methods to solve the Dirichlet problem without Dirichlet's Principle:

```
                          ATTEMPTS TO RESCUE POTENTIAL THEORY
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
Schwarz Alternating Method         Neumann Integral Equations         Poincaré's Balayage
    (H. A. Schwarz, 1870)              (Carl Neumann, 1877)           (Henri Poincaré, 1890)
• Decompose domain into simple     • Express boundary potential as    • "Sweeping out" charge
  overlapping pieces (disks)         a double-layer potential           distributions
• Alternate boundary values        • Leads to Fredholm integral       • Foundational for subharmonic
• Proves convergence geometrically   operators                          functions & Perron's method
```

1. **Hermann Amandus Schwarz (1870) — The Alternating Method (*Alternierendes Verfahren*)**:
   Schwarz (Weierstrass's student) proved that if a domain is formed by the union of two simpler domains (such as two overlapping disks) where the Dirichlet problem can be solved explicitly by Poisson's integral formula, one can alternate solving on each domain to produce a convergent sequence of harmonic functions.
2. **Carl Neumann (1877) — Boundary Integral Equations**:
   Neumann formulated the Dirichlet problem for convex domains using boundary integral equations, expressing the harmonic function as the potential of a double layer of charge on $\partial \Omega$. This work directly inspired Ivar Fredholm's theory of integral equations.
3. **Henri Poincaré (1890) — The Balayage ("Sweeping Out") Method**:
   Poincaré devised a method of repeatedly "sweeping out" masses to the boundary of smaller subdomains, generating a monotonically decreasing sequence of superharmonic functions that converges to the harmonic solution.

These methods proved that Riemann's theorems were indeed true for many domains, but they were technically monstrous compared to the breathtaking simplicity of Riemann's original variational idea.

---

## 6. The Plot Thickens: Counterexamples to the Actual Dirichlet Problem

Weierstrass's 1870 example had a weight $x^2$ multiplying the derivative. A skeptic might ask:
> *Could the actual Dirichlet integral $D[u] = \int_\Omega |\nabla u|^2 dx$ (without any $x^2$ weight) still work as Riemann envisioned for Laplace's equation?*

The twentieth century delivered an astonishing answer: **No.** Even for the standard Laplace equation, Dirichlet's Principle and the Dirichlet problem fail under very natural conditions!

---

### Hadamard's Counterexample (1906): Finite Energy Fails

In 1906, **Jacques Hadamard** asked a fundamental question:
*Does every continuous boundary function $g \in C(\partial \Omega)$ produce an admissible candidate with finite Dirichlet integral?*

Hadamard answered with an emphatic **NO**.

#### The Construction on the Unit Disk

Consider the open unit disk in $\mathbb{R}^2$:

$$
\mathbb{D} = \left\{ (x, y) \in \mathbb{R}^2 : x^2 + y^2 < 1 \right\}
$$

Its boundary is the unit circle $\partial \mathbb{D} = S^1$. In polar coordinates $(r, \theta)$, define a continuous boundary function $g(\theta)$ via the Fourier series:

$$
g(\theta) = \sum_{k=1}^\infty \frac{1}{k^2} \sin(k! \, \theta)
$$

Because $\sum_{k=1}^\infty \frac{1}{k^2} = \frac{\pi^2}{6} < \infty$, the series converges uniformly on $[0, 2\pi]$ by the Weierstrass $M$-test. Therefore:

$$
g \in C(S^1)
$$

The boundary condition is a bona fide continuous function!

By classical Fourier theory and separation of variables, the unique harmonic function in $\mathbb{D}$ continuous up to the boundary matching $g$ is:

$$
u(r, \theta) = \sum_{k=1}^\infty \frac{1}{k^2} r^{k!} \sin(k! \, \theta)
$$

Let us compute the Dirichlet integral of $u$ over the disk:

$$
D[u] = \int_{\mathbb{D}} |\nabla u|^2 \, dx \, dy = \int_0^{2\pi} \int_0^1 \left( \left(\frac{\partial u}{\partial r}\right)^2 + \frac{1}{r^2} \left(\frac{\partial u}{\partial \theta}\right)^2 \right) r \, dr \, d\theta
$$

Using the orthogonality of $\{ \sin(m\theta), \cos(m\theta) \}$ on $[0, 2\pi]$:

$$
\begin{aligned}
D[u] &= \pi \sum_{k=1}^\infty \left( \frac{1}{k^2} \right)^2 \int_0^1 \left( (k!)^2 r^{2k! - 2} \cdot r + \frac{1}{r^2} (k!)^2 r^{2k!} \cdot r \right) dr \\
&= 2\pi \sum_{k=1}^\infty \frac{(k!)^2}{k^4} \int_0^1 r^{2k! - 1} \, dr \\
&= 2\pi \sum_{k=1}^\infty \frac{(k!)^2}{k^4} \left[ \frac{r^{2k!}}{2k!} \right]_0^1 \\
&= \pi \sum_{k=1}^\infty \frac{k!}{k^4}
\end{aligned}
$$

Let us inspect the terms of this series:
- For $k = 1$: $\frac{1!}{1} = 1$
- For $k = 2$: $\frac{2!}{16} = \frac{1}{8}$
- For $k = 3$: $\frac{6}{81}$
- For $k = 4$: $\frac{24}{256}$
- For $k = 5$: $\frac{120}{625}$
- For $k = 6$: $\frac{720}{1296}$
- For $k \ge 7$: By Stirling's approximation, $k!$ grows super-exponentially, while $k^4$ is merely polynomial:
  $$
  \lim_{k \to \infty} \frac{k!}{k^4} = +\infty
  $$

The series diverges violently:

$$
D[u] = +\infty
$$

#### The Implication

The unique harmonic function matching $g$ on the boundary has **infinite Dirichlet energy**. Furthermore, by Dirichlet's principle itself, any other $C^1$ function on $\overline{\mathbb{D}}$ matching $g$ on the boundary must have:

$$
D[v] \ge D[u] = +\infty
$$

Therefore, the set of admissible functions with finite energy is **completely empty**:

$$
\mathcal{A} = \left\{ v \in C^1(\overline{\mathbb{D}}) : v|_{\partial \mathbb{D}} = g \text{ and } D[v] < \infty \right\} = \emptyset
$$

Riemann's assumption that $\inf D[v]$ was a real number was false even on the unit disk with continuous boundary data!

---

### Lebesgue's Spine (1912): The Geometry of the Boundary

Even if we abandon energy minimization and only ask whether a classical solution to $\Delta u = 0$ in $\Omega$, $u \in C(\overline{\Omega})$, $u|_{\partial \Omega} = g$ exists: **it can still fail if the domain has a sharp boundary singularity**.

In 1912, **Henri Lebesgue** constructed a famous 3D domain featuring an inward-pointing sharp cusp known as the **Lebesgue Spine** (or Lebesgue Thorn).

```
                 Lebesgue's 3D Domain with Inward Spine
                     ╭─────────────────────────╮
                    ╱                           ╲
                   │      Δu = 0                 │
                    ╲                           ╱
                     ╰─────────────╮     ╭─────╯
                                   │  ▲  │  Inward needle/cusp
                                   │  │  │  r = exp(-1/x₁), x₁ > 0
                                   ╰──┴──╯
                                   Origin O
```

Consider a 3D domain $\Omega$ formed by punching an ultra-sharp needle into a ball, where the boundary near the origin $O = (0,0,0)$ behaves like:

$$
r = \sqrt{x_2^2 + x_3^2} \le \exp\left(-\frac{1}{x_1}\right), \quad x_1 > 0
$$

If one assigns boundary values $g$ such that $g(O) = 1$ at the sharp tip, but $g = 0$ elsewhere on the boundary, the potential $u(x)$ inside $\Omega$ cannot continuously attain the value $1$ at the origin:

$$
\lim_{x \to O, \, x \in \Omega} u(x) = 0 \neq g(O)
$$

The electrostatic charge capacity of the sharp needle is too small to influence the potential in the interior. The point $O$ is an **irregular boundary point**.

The complete characterization of domains where the classical Dirichlet problem can be solved was finally resolved in 1924 by **Norbert Wiener** with the celebrated **Wiener Criterion** (based on logarithmic/Newtonian capacity).

---

## 7. The Resurrection: Hilbert and the Direct Method

Dirichlet's Principle was not dead; it was merely premature. It was waiting for modern functional analysis to be born.

In 1900, at the International Congress of Mathematicians in Paris, **David Hilbert** listed the calculus of variations and Dirichlet's Principle as his **20th Problem**:
> *"The general problem of boundary values."*

Already in 1899, Hilbert had read a preliminary paper titled *"Über das Dirichletsche Princip"*, followed by his definitive 1904 treatise. Hilbert proved that Riemann's core intuition was correct, provided it was formulated within the proper functional framework.

```
       19th Century View (Riemann)             20th Century View (Hilbert & Sobolev)
┌────────────────────────────────────────┐   ┌────────────────────────────────────────┐
│ Space: Classical C²(Ω) ∩ C(Ω̄)          │   │ Space: Sobolev Space H¹(Ω)             │
│ Topology: Uniform norm (Non-compact)   │ → │ Topology: Weak topology (Weak Compact) │
│ Existence: Assumed blindly             │   │ Existence: Direct Method in Variations │
│ Regularity: Assumed from the start     │   │ Regularity: Proved a posteriori        │
└────────────────────────────────────────┘   └────────────────────────────────────────┘
```

Hilbert inaugurated what is now known as the **Direct Method in the Calculus of Variations** (*Direkte Methode der Variationsrechnung*).

---

### The Four Pillars of the Direct Method

To prove that a functional $E[u]$ on an infinite-dimensional space $X$ attains its minimum:

$$
\min_{u \in X} E[u]
$$

one executes four rigorous steps:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   THE DIRECT METHOD IN VARIATIONS                      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┼────────────────────────────┐
       ▼                            ▼                            ▼
1. Minimizing Sequence       2. Weak Compactness          3. Weak Lower
   Take u_k such that           Extract u_k ⇀ u           Semicontinuity
   E[u_k] → d = inf E           using reflexivity &       E[u] ≤ lim inf E[u_k]
                                coercivity: ‖u_k‖ ≤ C     shows E[u] = d
```

#### 1. Formulate on a Complete Space (Sobolev Space $H^1$)
We must expand the class of functions beyond $C^1$ to include functions whose first derivatives exist in a generalized (**weak**) sense and are square-integrable. This is the **Sobolev space**:

$$
H^1(\Omega) = W^{1,2}(\Omega) = \left\{ u \in L^2(\Omega) : \frac{\partial u}{\partial x_i} \in L^2(\Omega), \; i=1,\dots,n \right\}
$$

equipped with the norm:

$$
\|u\|_{H^1}^2 = \|u\|_{L^2}^2 + \|\nabla u\|_{L^2}^2 = \int_\Omega |u|^2 \, dx + \int_\Omega |\nabla u|^2 \, dx
$$

$H^1(\Omega)$ is a **Hilbert space**—it is complete, reflexive, and equipped with an inner product.

#### 2. Weak Compactness from Coercivity
By the **Poincaré Inequality**, for functions vanishing on the boundary ($u \in H_0^1(\Omega)$):

$$
\|u\|_{L^2(\Omega)} \le C_\Omega \|\nabla u\|_{L^2(\Omega)}
$$

Thus, the Dirichlet energy controls the full Sobolev norm:

$$
D[u] = \|\nabla u\|_{L^2}^2 \ge c \|u\|_{H^1}^2 \quad \text{(Coercivity)}
$$

If $\{ u_k \} \subset H^1$ is a minimizing sequence ($D[u_k] \to d = \inf D$), coercivity guarantees that the sequence is **bounded in norm**:

$$
\|u_k\|_{H^1} \le M < \infty
$$

By the fundamental theorem of functional analysis (the **Banach-Alaoglu Theorem** and **Eberlein-Šmulian Theorem**):
> *In any reflexive Banach space (and in particular any Hilbert space), every bounded sequence possesses a **weakly convergent subsequence**!*

Therefore, there exists a subsequence $u_{k_j}$ and a limit function $u_0 \in H^1(\Omega)$ such that:

$$
u_{k_j} \rightharpoonup u_0 \quad \text{weakly in } H^1(\Omega)
$$

The minimizing sequence cannot escape into non-existence!

#### 3. Weak Lower Semicontinuity (WLSC)
Although the functional $D[u]$ is generally not continuous under weak convergence, it is convex.
In a Hilbert space, any continuous and convex functional is **weakly lower semicontinuous**:

$$
D[u_0] \le \liminf_{j \to \infty} D[u_{k_j}]
$$

Because $D[u_{k_j}] \to d = \inf D$, this gives:

$$
D[u_0] \le d
$$

Since $u_0$ belongs to the admissible space, we also have $D[u_0] \ge d$. Consequently:

$$
D[u_0] = d = \min_{u \in \mathcal{A}} D[u]
$$

**The minimizer $u_0 \in H^1(\Omega)$ exists!**

---

### The Final Step: Elliptic Regularity (Smoothness)

Does this weak minimizer $u_0 \in H^1(\Omega)$ solve Laplace's equation in the classical sense?

At this stage, $u_0$ is merely an equivalence class of square-integrable functions with weak derivatives. Does $u_0$ have continuous second derivatives ($u_0 \in C^2(\Omega)$)?

The resolution of this question required the development of **Elliptic Regularity Theory**:
- **Hermann Weyl (1940) — Weyl's Lemma**: If a locally integrable function $u \in L^1_{\text{loc}}(\Omega)$ satisfies $\int_\Omega u \Delta \phi \, dx = 0$ for all $\phi \in C_c^\infty(\Omega)$, then $u$ is (after redefinition on a set of measure zero) **infinitely differentiable** ($C^\infty$) and $\Delta u = 0$ pointwise!
- **Schauder Estimates (1930s)**: Proved boundary regularity up to $\partial \Omega$ provided $\partial \Omega$ is sufficiently smooth (e.g. $C^{2,\alpha}$).
- **De Giorgi-Nash-Moser Theorem (1957–1960)**: Extended regularity to minimizers of elliptic equations with rough, discontinuous coefficients.

Riemann's magnificent geometric intuition was fully vindicated: the minimizer does exist, and it is indeed a smooth, classical harmonic function—provided the domain and boundary data satisfy the necessary Sobolev and capacity conditions.

---

## 8. Summary Comparison

| Concept | The 1850s Orthodoxy (Riemann & Dirichlet) | The 1870 Counterexample (Weierstrass) | The Modern Resolution (Hilbert & Sobolev) |
| :--- | :--- | :--- | :--- |
| **Guiding Philosophy** | Physical intuition (energy always has an equilibrium) | Pure mathematical analysis (arithmetization & counterexamples) | Functional analysis & topology |
| **Underlying Space** | $C^2(\Omega) \cap C(\overline{\Omega})$ (Classical smooth functions) | Discovered that minimizing sequences escape $C^1$ into discontinuous functions | Sobolev space $H^1(\Omega) = W^{1,2}(\Omega)$ (Weak derivatives) |
| **Topology** | Classical uniform convergence ($C^0$ norm) | Pointwise convergence showing jump discontinuities | Weak topology in Hilbert spaces |
| **Infimum vs. Minimum** | Assumed: $\inf E[u]$ is achieved by a function | Proved: $\inf E[u]$ exists, but minimum is NOT attained | Direct Method: Coercivity + Weak Lower Semicontinuity $\implies$ Minimum exists |
| **Regularity** | Assumed smooth a priori | Showed non-differentiable / discontinuous limits occur | Proved a posteriori via Elliptic Regularity (Weyl's Lemma, Schauder) |
| **Boundary Values** | Any continuous $g$ assumed to work | Did not address boundary pathologies | Hadamard ($D[u] = \infty$) and Lebesgue spine resolved by Wiener capacity |

---

## 9. Chronology of Dirichlet's Principle

```
1828 ── George Green publishes essay on potential theory
1847 ── William Thomson (Lord Kelvin) formulates variational principle
1850s── Dirichlet lectures on the principle in Göttingen
1851 ── Bernhard Riemann coins "Dirichlet's Principle" in his doctoral thesis
1857 ── Riemann uses Dirichlet's Principle to establish the theory of Abelian functions
1870 ── Karl Weierstrass presents 1D counterexample to the Berlin Academy (July 14)
1870 ── Hermann Schwarz invents the Alternating Method to bypass the principle
1877 ── Carl Neumann solves Dirichlet problem using boundary integral equations
1890 ── Henri Poincaré introduces the Balayage method
1899 ── David Hilbert begins the resurrection of Dirichlet's Principle
1900 ── Hilbert announces 20th Problem at Paris ICM
1904 ── Hilbert publishes "Über das Dirichletsche Prinzip", launching the Direct Method
1906 ── Jacques Hadamard constructs disk example where harmonic extension has infinite energy
1912 ── Henri Lebesgue discovers the Lebesgue Spine (boundary irregularity)
1924 ── Norbert Wiener establishes the Wiener Criterion for boundary regular points
1936 ── Sergei Sobolev introduces Sobolev spaces W^{k,p}
1940 ── Hermann Weyl proves Weyl's Lemma (weak harmonic functions are smooth)
```

---

## 10. Concluding Remarks

The story of the Weierstrass counterexample to Dirichlet's Principle is one of the most transformative sagas in the history of mathematics.

What began as an apparent disaster—the invalidation of Riemann's crowning achievements in complex analysis and algebraic geometry—ultimately triggered a mathematical renaissance:

1. **The Separation of Existence and Regularity**: In classical analysis, one looked for smooth solutions directly. Modern analysis learned to decouple the problem into two distinct phases: first, find a **weak solution** in a large, complete function space (where compactness is available); second, use **regularity theory** to prove that the weak solution is smooth.
2. **The Birth of Modern Functional Analysis**: The quest to resurrect Dirichlet's Principle led directly to Hilbert spaces, weak topologies, Sobolev spaces, and distribution theory.
3. **The Power of Counterexamples**: Weierstrass did not destroy Dirichlet's Principle; he disciplined it. By pinpointing exactly where intuitive reasoning broke down, his counterexample forced mathematics to create the tools that transformed the calculus of variations into the modern theory of partial differential equations.

As David Hilbert famously proclaimed in his 1900 address:

> *"Every mathematician knows that Dirichlet’s Principle was used by Riemann with the greatest success... but Weierstrass showed by a simple example that the conclusion is not valid. The problem now is to revive Dirichlet’s Principle and establish it upon a rigorous foundation."*

That revival redefined mathematics for the twentieth century.
