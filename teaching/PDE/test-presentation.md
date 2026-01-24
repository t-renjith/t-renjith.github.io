---
layout: presentation
title: Solving PDE Example
---

# Solving First-Order PDE
### Method of Characteristics

RENJITH T
Jan 24, 2026

---

## Problem Statement

We want to solve the following Initial Value Problem (IVP):

> **PDE**
> $$ x u_x + y u_y = 2u $$

<br>

> **Initial Condition**
> $$ u(x, 1) = x, \quad x \in \mathbb{R} $$

---

## 1. Method of Characteristics

| General Form | Our Problem |
| :--- | :--- |
| **Equation** | **Values** |
| $$ a u_x + b u_y = c $$ | $$ a=x, ~~ b=y, ~~ c=2u $$ |
| **Characteristic Eq** | **Characteristic Eq** |
| $$ \frac{dx}{a} = \frac{dy}{b} = \frac{du}{c} $$ | $$ \frac{dx}{x} = \frac{dy}{y} = \frac{du}{2u} $$ |

---

## 2. finding Characteristics ($C_1$)

Consider the pair $\frac{dx}{x} = \frac{dy}{y}$:

$$ \int \frac{dx}{x} = \int \frac{dy}{y} $$

--

$$ \ln|x| = \ln|y| + c_1 $$

--

$$ \ln|x| - \ln|y| = c_1 \implies \ln\left|\frac{x}{y}\right| = c_1 $$

--

> $$ \frac{x}{y} = C_1 $$

---

## 3. Finding Characteristics ($C_2$)

Consider the pair $\frac{dy}{y} = \frac{du}{2u}$:

$$ \int \frac{dy}{y} = \frac{1}{2} \int \frac{du}{u} $$

--

$$ 2 \ln|y| = \ln|u| + c_2 \implies \ln|y^2| - \ln|u| = c_2 $$

--

$$ \ln\left|\frac{y^2}{u}\right| = c_2 $$

--

> $$ \frac{u}{y^2} = C_2 $$

---

## 4. General Solution

The general solution is of the form $C_2 = \phi(C_1)$:

$$ \frac{u}{y^2} = \phi\left(\frac{x}{y}\right) $$

--

> $$ u(x,y) = y^2 \phi\left(\frac{x}{y}\right) $$

Where $\phi$ is an arbitrary differentiable function.

---

## 5. Transversality Condition

Parametrize the initial curve $\Gamma$ (where $y=1$):
$$ x_0(s) = s, \quad y_0(s) = 1, \quad u_0(s) = s $$

Use the Jacobian condition:
$$ J = \det \begin{pmatrix} a & b \\ x_0'(s) & y_0'(s) \end{pmatrix} $$

--

| Matrix | Calculation |
| :--- | :--- |
| $$ J = \det \begin{pmatrix} x_0(s) & y_0(s) \\ 1 & 0 \end{pmatrix} $$ | $$ J = (s \cdot 0) - (1 \cdot 1) $$ |
| $$ J = \det \begin{pmatrix} s & 1 \\ 1 & 0 \end{pmatrix} $$ | $$ J = -1 \neq 0 $$ |

--

**Conclusion:** Transversality holds! Example has a unique solution.

---

## 6. Particular Solution

General Solution: $u(x,y) = y^2 \phi\left(\frac{x}{y}\right)$

Apply IC $u(x,1) = x$:

$$ u(x,1) = 1^2 \cdot \phi\left(\frac{x}{1}\right) = x $$

--

$$ \implies \phi(x) = x $$

The function $\phi$ is the identity function.

---

## 7. Final Result

Substitute $\phi(v) = v$ back into general solution:

$$ u(x,y) = y^2 \cdot \left( \frac{x}{y} \right) $$

> **Final Answer**
> $$ u(x,y) = xy $$

---

## Verification

| Check PDE | Check IC |
| :--- | :--- |
| **$x u_x + y u_y = 2u$** | **$u(x,1) = x$** |
| $u_x = y, \quad u_y = x$ | $u(x,1) = x(1)$ |
| $x(y) + y(x) = 2xy$ | $= x$ |
| $2xy = 2(xy)$ | |
| **Verified** | **Verified** |
