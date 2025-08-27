# Supabase MCP Setup Guide

## What is MCP?

Model Context Protocol (MCP) is an open standard that allows AI tools to connect and interact with external services like Supabase. It enables your AI assistant to:

- Create and manage Supabase projects
- Design database tables automatically
- Generate migrations
- Query data and run reports
- Manage configurations and TypeScript types

## Current MCP Configuration

I've added the Supabase MCP server to your Cursor configuration at `~/.cursor/mcp.json`.

## Setup Steps

### 1. Create a Supabase Personal Access Token

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click on your profile (top right)
3. Go to "Access Tokens" 
4. Create a new token with appropriate permissions
5. Copy the token

### 2. Set Environment Variable

Add your Supabase access token to your environment:

```bash
# Add to your ~/.bashrc, ~/.zshrc, or ~/.bash_profile
export SUPABASE_ACCESS_TOKEN="your_token_here"
```

Or create a `.env` file in your project:

```bash
echo "SUPABASE_ACCESS_TOKEN=your_token_here" >> ~/.env
```

### 3. Available MCP Commands

Once configured, you can ask your AI assistant to:

- **Create Projects**: "Create a new Supabase project for my portfolio"
- **Design Tables**: "Create a contact_submissions table with fields for name, email, message"
- **Generate Migrations**: "Generate a migration to add a new field to my table"
- **Query Data**: "Show me all contact submissions from this week"
- **Manage Schema**: "Update my database schema to include timestamps"

### 4. Tool Groups Available

The Supabase MCP server includes these tool groups:

- `account` - Account management
- `docs` - Documentation access
- `database` - Database operations (tables, queries, migrations)
- `debug` - Debugging and logs
- `development` - Development tools
- `functions` - Edge functions management
- `branching` - Database branching
- `storage` - File storage management

### 5. Security Best Practices

- Use `--read-only` mode for safer operations (already configured)
- Create a dedicated development project for testing
- Don't use production data with MCP initially
- Review generated SQL before applying to production

### 6. Advanced Configuration

You can customize the MCP server with additional options:

```json
{
  "supabase": {
    "command": "npx",
    "args": [
      "-y",
      "@supabase/mcp-server-supabase@latest",
      "--read-only",
      "--project-ref=your-project-id",
      "--features=database,docs"
    ],
    "env": {
      "SUPABASE_ACCESS_TOKEN": "${SUPABASE_ACCESS_TOKEN}"
    }
  }
}
```

## Testing the Integration

1. Restart Cursor
2. Open your project
3. Try asking: "Can you help me create a contact form database using Supabase MCP?"
4. The AI should now be able to directly interact with your Supabase projects

## Troubleshooting

- **MCP server not connecting**: Check your access token and environment variables
- **Permission errors**: Ensure your access token has sufficient permissions
- **Commands not working**: Restart your AI tool after configuration changes

## What This Replaces

With MCP configured, you won't need to:
- Manually write SQL schema files
- Copy/paste database configurations
- Manually set up Supabase client code

The AI can do all of this automatically through the MCP integration!