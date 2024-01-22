---
title: Single Sign-On (SSO)
---

# Setting Up Single Sign-On (SSO) for Your Enterprise Account

Welcome to the Single Sign-On (SSO) setup guide. This document will guide you through obtaining the necessary credentials from your Identity Provider (IdP) and coordinating with our staff to ensure a smooth and secure integration.

> **Note**: The Single Sign-On (SSO) integration feature is available exclusively for AskUI Enterprise accounts. If you do not have an Enterprise account and are interested in this feature, please contact our sales team for more information on upgrading your account.


## Prerequisites

Before you begin, ensure you have administrative access to your organization’s IdP service (such as Azure AD, Google Workspace, etc.) and that your enterprise account with us is eligible for SSO integration.

## Step 1: Gathering Necessary Data from Your Identity Provider

Depending on your IdP, you will need to gather the following data:

### For Azure AD

- **Domain Name**: Your Azure AD domain (typically `companyname.onmicrosoft.com`).
- **Client ID**: The application's unique identifier in Azure AD.
- **Client Secret**: A key used by the application to authenticate with Azure AD.

### For Google Workspace

- **Client ID**: Found in your Google API Console.
- **Client Secret**: Also found in your Google API Console.

### For Other OAuth/OpenID Connect Providers

- **Issuer URL**: The URL where the IdP issues tokens.
- **Client ID**: Unique identifier for the application.
- **Client Secret**: A key used by the application to authenticate with the IdP.

**Note**: Keep all sensitive data secure and share it only through approved channels.

## Step 2: Configuring SSO on Our Platform

Once you have collected the necessary information from your IdP, you can begin the configuration process on our platform.

### Contacting Support

To ensure the security and correctness of the setup, please contact our support team to assist you with the integration. You can reach out to us via:

- **Email**: `support@askui.com`
- **Chat**: `[Support Website]`

### What You’ll Need to Provide

Our support team will need the following information to assist with the setup:

1. Your IdP information (Domain Name, Client ID, Client Secret).
2. Your preferred method of user attribute mapping.

## Step 3: Testing the Integration

After our support team has configured the SSO integration:

1. **Conduct Initial Tests**: Verify that the SSO integration works as expected using a test account.
2. **Verify User Provisioning**: Confirm that user accounts are being provisioned and deprovisioned correctly.
3. **Check Access and Permissions**: Ensure that users have the appropriate level of access.

## Step 4: Rolling Out to Users

With testing complete, you can roll out the SSO integration to your user base:

1. **Communicate Changes**: Inform your users about the new SSO process.
2. **Provide Training

# Setting Up Single Sign-On (SSO) for Your Enterprise Account

Welcome to the Single Sign-On (SSO) setup guide. This document will guide you through obtaining the necessary credentials from your Identity Provider (IdP) and coordinating with our staff to ensure a smooth and secure integration for a variety of supported SSO providers.

## Prerequisites

Before you begin, ensure you have administrative access to your organization’s IdP service and that your enterprise account with us is eligible for SSO integration.

## Supported Identity Providers

Our platform supports SSO integration with a wide range of identity providers including, but not limited to:

- Active Directory/LDAP
- ADFS
- Azure Active Directory Native
- Google Workspace
- OpenID Connect
- Okta
- PingFederate
- SAML
- Azure Active Directory

**For More Information**: To learn more about the identity providers supported for SSO integration, please visit [Auth0 Enterprise Identity Providers documentation](https://auth0.com/docs/authenticate/identity-providers/enterprise-identity-providers). This resource provides detailed information on each provider and guidance on integration specifics.

## Step 1: Determining Your SSO Protocol

Identify the SSO protocol or federated identity provider your organization uses from the list of supported providers above.

## Step 2: Gathering Necessary Data from Your Identity Provider

To set up SSO, you will need to gather specific information from your IdP. Here is what you will typically need from each provider:

### Common Data Required Across All Providers
- **Domain Name**: Your organization's domain associated with the IdP.
- **Client ID**: The unique identifier for your application registered with the IdP.
- **Client Secret**: A secret key used by your application to authenticate with the IdP.

### Provider-Specific Data

#### Active Directory/LDAP
- **Server URL**: The LDAP server URL.
- **Bind DN**: The distinguished name to bind to the LDAP server.
- **Bind Credentials**: The password or other credentials required to bind to the LDAP server.

#### ADFS
- **Federation Metadata URL**: The URL where the federation metadata is published.
- **Relying Party Trust Identifier**: The identifier for your service configured in ADFS.

#### Azure Active Directory Native
- **Tenant ID**: The unique identifier of your Azure AD tenant.
- **Redirect URI**: The URI where the IdP sends the authentication response.

#### Google Workspace
- **Service Account Email**: The service account email used for Google Workspace integration.
- **Service Account Key**: The private key associated with the service account.

#### OpenID Connect
- **Issuer URL**: The URL of your IdP to verify the issuer of the token.
- **Scopes**: The scopes of access you are requesting.

#### Okta
- **Okta Domain**: Your Okta account domain.
- **API Token**: A token to authenticate API requests.

#### PingFederate
- **PingFederate Server URL**: The URL to your PingFederate server.
- **Partner's Entity ID**: The entity ID of your partner configuration in PingFederate.

#### SAML
- **SAML SSO URL**: The endpoint URL for SAML Single Sign-On.
- **X.509 Certificate**: The certificate to sign SAML requests.

#### Azure Active Directory
- **Azure AD Identifier**: The unique identifier for your Azure AD directory.
- **Reply URL (Assertion Consumer Service URL)**: The URL to which the SAML assertion is sent.

**Note**: This list is not exhaustive, and additional information may be required by your IdP. Ensure all sensitive information is shared securely and refer to the latest documentation provided by the IdP for detailed requirements.

## Step 3: Requesting Data

Request the required data from your IdP. If possible, also request a test user to facilitate the setup and testing processes.

## Step 4: Setting Up the Connection

Contact our support team for assistance with configuring SSO on our platform. They will guide you through the process specific to your chosen IdP and ensure the connection is set up correctly. You can reach out to us via:

- **Email**: `support@askui.com`

## Step 5: Testing the Integration

After configuring SSO, test the login and signup process with a user account from your domain to verify that the integration works as expected.

## Support and Troubleshooting

For any questions or assistance, our support team is ready to help. Reach out with any concerns or if you require troubleshooting assistance.