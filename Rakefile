require 'rake'
require 'yaml'

module Sidebar
  VERSION =  "1.9.6"
  YEAR = Time.new.year
end

module SidebarHelper
  ROOT_DIR   = File.expand_path(File.dirname(__FILE__))
	SOURCE_DIR    = File.join(ROOT_DIR, 'app')
  CONFIG_DIR   = File.join(ROOT_DIR, 'config')
	BUILD_DIR	   = File.join(ROOT_DIR, 'build')
  
  def self.has_git?
    begin
      `git --version`
      return true
    rescue Error => e
      return false
    end
  end
  
  def self.require_git
    return if has_git?
    puts <<-git_message
      BugSidebar requires Git in order to load its dependencies.
      Make sure you've got Git installed and in your path.
      For more information, visit:
      http://book.git-scm.com/2_installing_git.html
    git_message
    exit
  end
  
  def self.get_submodule(name, path)
    require_git
    puts "\nYou seem to be missing #{name}. Obtaining it via git...\n\n"
    
    Kernel.system("git submodule init")
    return true if Kernel.system("git submodule update vendor/#{path}")
    # If we got this far, something went wrong.
    puts "\nLooks like it didn't work. Try it manually:\n\n"
    puts "  $ git submodule init"
    puts "  $ git submodule update vendor/#{path}"
    false
  end
  
  def self.require_submodule(name, path)
    begin
      require path
    rescue LoadError => e
      # Wait until we notice that a submodule is missing before we bother the
      # user about installing git. (Maybe they brought all the files over
      # from a different machine.)
      missing_file = e.message.sub('no such file to load -- ', '')
      if missing_file == path
        # Missing a git submodule.
        retry if get_submodule(name, path)
      else
        # Missing a gem.
        puts "\nIt looks like #{name} is missing the '#{missing_file}' gem. Just run:\n\n"
        puts "  $ gem install #{missing_file}"
        puts "\nand you should be all set.\n\n"
      end
      exit
    end
  end
  
  def self.require_sprockets
    require_submodule('Sprockets', 'sprockets')
  end
  
  def self.sprocketize(options = {})
    options = {
      :destination    => BUILD_DIR,
      :source => 'bugsidebar.user.js'
    }.merge(options)
    
    require_sprockets
    environment = Sprockets::Environment.new
	  environment.append_path SOURCE_DIR
    environment.append_path CONFIG_DIR
    
    source = environment.find_asset("bugsidebar.user.js.erb")
    source.write_to(File.join(options[:destination],options[:source]))
  end
end


desc "Builds the distribution."
task :build do
  SidebarHelper.sprocketize
end

task :default => [:build]