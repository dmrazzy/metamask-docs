---
description: Learn about the MetaMask Ethereum provider API and JSON-RPC API.
---

# About the Wallet API

MetaMask's Wallet API consists of an [Ethereum provider API](#ethereum-provider-api), which wraps
a [JSON-RPC API](#json-rpc-api).

:::tip API documentation
The API methods are documented in the following references:

- [Ethereum provider API reference](../reference/provider-api.md)
- [JSON-RPC API reference](/wallet/reference/json-rpc-methods)
  :::

## Ethereum provider API

MetaMask injects a global JavaScript API into websites visited by its users using the
`window.ethereum` provider object.
This API is specified by [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193), and it allows dapps to
request users' EVM accounts, read data from blockchains the user is connected to, suggest
that the user sign messages and transactions, and more.

:::info EIP-6963: Wallet interoperability
MetaMask supports [EIP-6963](https://eips.ethereum.org/EIPS/eip-6963), which introduces an
alternative wallet detection mechanism to the `window.ethereum` injected provider.
This alternative mechanism enables dapps to support [wallet interoperability](wallet-interoperability.md)
by discovering multiple injected wallet providers in a user's browser.
We recommend [using this mechanism to connect to MetaMask](../how-to/connect-extension.md).

You can access the provider API using the selected EIP-6963 provider object.
Throughout this documentation, we refer to the selected provider using `provider`.
:::

The MetaMask Ethereum provider API contains the following:

- [Properties](../reference/provider-api.md#properties) - The provider contains a property that
  detects if a user has MetaMask installed.
- [Methods](../reference/provider-api.md#methods) - The provider contains methods that dapps can call.
  The [`request()`](../reference/provider-api.md#request)
  provider method wraps the [JSON-RPC API](#json-rpc-api); dapps can use this
  provider method to call any RPC method.
- [Events](../reference/provider-api.md#events) - The provider emits events that dapps can listen to.

View the [provider API reference](../reference/provider-api.md) for all the provider properties,
methods, and events.

:::note Multichain API
MetaMask supports the [Multichain API](multichain-api.md) for interacting with multiple blockchain networks and ecosystems simultaneously.
While the Multichain API is backwards compatible with the provider API, the provider API is not optimized for multichain usage.
If you intend to support multichain interactions, we recommend
[starting directly with the Multichain API](../how-to/manage-networks/use-multichain.md).
:::

## JSON-RPC API

MetaMask uses the [`request()`](../reference/provider-api.md#request)
method of the [provider API](#ethereum-provider-api) to wrap a JSON-RPC API.
The JSON-RPC API contains standard Ethereum JSON-RPC API methods and MetaMask-specific methods.

The RPC methods are documented in the interactive [JSON-RPC API reference](/wallet/reference/json-rpc-methods).

:::note
All RPC method requests can return errors.
Make sure to handle errors for every call to
[`request()`](../reference/provider-api.md#request).
:::

The RPC methods are divided into the following:

- [Restricted methods](#restricted-methods) - Require user consent for actions that impact assets or data (for example, initiating a transaction).
- [Unrestricted methods](#unrestricted-methods) - Allow dapps to perform basic actions without permission (for example, retrieving a public address).

### Restricted methods

MetaMask implements permissions based on [EIP-2255](https://eips.ethereum.org/EIPS/eip-2255) to enhance security for when users interact with dapps.
This requires that dapps obtain user consent before accessing certain features.
Under the hood, permissions are plain, JSON-compatible objects, with fields that are mostly used
internally by MetaMask.

Restricted methods are methods that cannot be called unless you have permission to do so using
[`wallet_requestPermissions`](/wallet/reference/json-rpc-methods/wallet_requestpermissions) or
[`wallet_requestSnaps`](/snaps/reference/wallet-api-for-snaps/#wallet_requestsnaps).

The following methods are restricted:

- [`eth_accounts`](/wallet/reference/json-rpc-methods/eth_accounts) - Gaining permission requires calling `wallet_requestPermissions`.
  Granting permission for `eth_accounts` also grants permissions for the following methods:

  - [`eth_sendTransaction`](/wallet/reference/json-rpc-methods/eth_sendtransaction)
  - [`personal_sign`](/wallet/reference/json-rpc-methods/personal_sign)
  - [`eth_signTypedData_v4`](/wallet/reference/json-rpc-methods/eth_signtypeddata_v4)
  :::caution important
  To access accounts, we recommend using [`eth_requestAccounts`](/wallet/reference/json-rpc-methods/eth_requestaccounts),
  which automatically asks for permission to use `eth_accounts` by calling `wallet_requestPermissions` internally.
  See [how to access a user's accounts](../how-to/access-accounts.md) for more information.
  :::

- [`wallet_snap`](/snaps/reference/wallet-api-for-snaps/#wallet_snap) - Gaining permission requires
  calling `wallet_requestSnap`.

- [`wallet_invokeSnap`](/snaps/reference/wallet-api-for-snaps/#wallet_invokesnap) - Gaining
  permission requires calling `wallet_requestSnap`.

### Unrestricted methods

Unrestricted methods do not require requesting permission to call them, but they might require confirmation by the
user (for example, [`wallet_addEthereumChain`](/wallet/reference/json-rpc-methods/wallet_addethereumchain)).
