require 'pry'
require 'matrix'

class Game < ApplicationRecord
attr_accessor :start, :solution
  
  def initialize()
    super
    # Define the starting board and the solution
    @start = Array.new(9){Array.new(9)}
    @solution = [ [4, 7, 3, 5, 2, 8, 1, 9, 6], [2, 5, 1, 6, 7, 9, 8, 4, 3], [6, 8, 9, 1, 4, 3, 2, 7, 5],
                  [1, 4, 7, 9, 3, 2, 5, 6, 8], [3, 6, 5, 8, 1, 7, 4, 2, 9], [9, 2, 8, 4, 5, 6, 7, 3, 1],
                  [8, 3, 4, 7, 9, 1, 6, 5, 2], [7, 9, 6, 2, 8, 5, 3, 1, 4], [5, 1, 2, 3, 6, 4, 9, 8, 7] ]
    1000.times do
      shuffle
    end
    @start = create_start(@start)
    @start = @start.flatten()
    @solution = @solution.flatten()
  end
  
    def shuffle
      rows, cols = [], []
      for i in 0..8
        #rows[i] = @solution.row(i)
        #cols[i] = @solution.transpose.row(i)
        rows[i] = @solution[i]
        cols[i] = @solution.transpose[i]
      end
      
      case rand(5)
      when 0    # swap single rows
        single_swap(rows)
        @solution = rows
      when 1    # swap single columns
        single_swap(cols)
        @solution = cols
        @solution = @solution.transpose
      when 2    # swap row groups
        group_swap(rows)
        @solution = rows
      when 3    # swap column groups
        group_swap(cols)
        @solution = cols
        @solution = @solution.transpose
      when 4    # transpose rows and columns
        @solution = @solution.transpose
      end
    end
    
    def single_swap(vects)
#     Setup variables to be used in the shuffle
      multiplier, excluded = rand(3)*3, rand(3)
      idx = [0,1,2].select do |elem|
        elem != excluded
      end
      vects[idx[0]+multiplier],vects[idx[1]+multiplier] = vects[idx[1]+multiplier],vects[idx[0]+multiplier]
    end
    
    def group_swap(vects)
#     Setup variables to be used in the shuffle
      excluded = rand(3)
      grps = [0,1,2].select do |elem|
        elem != excluded
      end
      vects[grps[0]*3],vects[grps[1]*3] = vects[grps[1]*3],vects[grps[0]*3]
      vects[grps[0]*3+1],vects[grps[1]*3+1] = vects[grps[1]*3+1],vects[grps[0]*3+1]
      vects[grps[0]*3+2],vects[grps[1]*3+2] = vects[grps[1]*3+2],vects[grps[0]*3+2]
    end
    
    def create_start(arr)
      reveal = []
      num_shown = 29
      while reveal.length < num_shown
        n = rand(81)
        if !reveal.include? n
          reveal.push(n)
        end
      end
      for i in reveal
        arr[i/9][i%9] = @solution[i/9][i%9]
      end
      arr
    end
end
