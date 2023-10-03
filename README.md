# js-training
ATOMIC DESIGN
Atomic Design is a specific way of organizing the components of a project; it is directly inspired by Atomic concepts of chemistry, hence the name. Atomic Design takes inspiration from the concept of an atom being the smallest unit, followed by a molecule being the combination of atoms, and, finally, organisms being made of molecules.
1.Atoms: These are the building blocks, which cannot be further broken down
2.Molecules: Atoms grouped together form a single molecule
3.Organisms: Molecules joined together to create a part of the interface
4.Templates: The content structure
5.Pages: Interfaces built as instances of templates

12 FACTOR APP 
The Twelve-Factor App methodology is based on twelve principles that act as a building block for developing and deploying SaaS applications. These include:

1. CodeBase: 
The first principle states that every application’s code should be maintained in a single source code repository.
2.Dependencies
According to this principle, the app must always explicitly declare all the dependencies and their correct versions.
3.Config:
Because an app’s config varies between several deploys, storing it as constants in code violates the 12 Factor. Please note that the “config” here doesn’t mean the app’s internal config, as it doesn’t vary between deployments and is best stored in code.
4. Backing Services: 
In a 12-Factor App, Backing Services means any attached services that the app consumes over the network to execute its normal operations. These services can either be locally managed or can be some third parties.
5. Build, Release, Run:
Strictly Separate Build and Run stages .Build, release, and run are three essential stages of the Software Development Life Cycle.
6.Processes:
An app is executed in an execution environment as a collection of one or more processes. And 12 Factor processes are independently operating, stateless, and share nothing. Therefore, any required data time and again must be stored in a stateful backing service.
7.Port Binding:
A Twelve-Factor App acts as a standalone service and doesn’t require runtime injection of a webserver in an execution environment to do a web-facing service. It means that a web app that complies with Twelve-Factor principles is self-contained and doesn’t require any running or existing app server for the execution.
8.Concurrency:
This 12 Factor principle is related to scaling the application, and it says you should deploy more copies of the application instead of making the app larger. It supports the horizontal scaling of an app instead of vertical scaling.
9.Disposability:
The 12 Factor App disposability principle maximizes an application’s robustness with fast startup and graceful shutdown.
10.Dev/Prod Parcity:
Keep Development, Staging, and Production as Similar as Possible.The Twelve-Factor App Methodology suggests that an app’s development, staging, and production environment should be as similar as possible to ensure that anyone can understand and release it.
11.Logs:
The rule suggests treating logs as event streams. Logging is crucial for keeping a check on the behavior of your application. However, 12-Factor apps shouldn’t be concerned with managing these logs.
12.Admin Processes:
 Run Admin/management Tasks as One-off Processes Though this rule is not related to developing services, it is more about managing your application. According to this principle, the apps should run management or admin tasks in an identical environment as the app’s regular and long-running processes.

